import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import ts from 'typescript';
async function readModule(path) {
 const source=readFileSync(new URL(path,import.meta.url),'utf8');
 const compiled=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;
 return import('data:text/javascript;base64,'+Buffer.from(compiled).toString('base64'));
}
const { siteData }=await readModule('../src/lib/siteData.ts');
const { locales,translations }=await readModule('../src/lib/i18n.ts');
const exportRoot=new URL('../out/',import.meta.url);
test('every catalog product has an exported page and its local assets',()=>{
 for(const product of siteData.products) {
  assert.ok(existsSync(new URL(`urunler/${product.slug}/index.html`,exportRoot)),product.slug);
  for(const image of product.images) assert.ok(existsSync(new URL(image.slice(1),new URL('../public/',import.meta.url))),image);
 }
});
test('navigation, contact and sitemap are present in the static export',()=>{
 for(const page of ['','urunler/','iletisim/','hakkimizda/','haberler/','kids/']) {
  const html=readFileSync(new URL(page+'index.html',exportRoot),'utf8');
  assert.ok(html.includes('<html'));assert.ok(html.includes('Kalendos'));
  for(const match of html.matchAll(/(?:src|href)="([^"?#]+\.(?:css|js))"/g)) {
   if(match[1].startsWith('/')) assert.ok(existsSync(new URL(match[1].slice(1),exportRoot)),match[1]);
  }
 }
 const sitemap=readFileSync(new URL('sitemap.xml',exportRoot),'utf8');
 for(const product of siteData.products) assert.ok(sitemap.includes('/urunler/'+product.slug),product.slug);
});
test('all four languages preserve the translation key structure',()=>{
 function keys(object,prefix='') {return Object.entries(object).flatMap(([key,value])=>value && typeof value==='object' ? keys(value,prefix+key+'.'):[prefix+key]).sort();}
 assert.deepEqual(locales,['tr','en','es','ar']);
 for(const locale of locales) assert.deepEqual(keys(translations[locale]),keys(translations.en),locale);
});

test('footer category links use the product filter query parameter',()=>{
 const html=readFileSync(new URL('urunler/index.html',exportRoot),'utf8');
 const categories=siteData.categories.map(category=>category.id);
 const links=[...html.matchAll(/href="([^" ]*\?(?:category|kategori)=[^" ]*)"/g)].map(match=>new URL(match[1].replaceAll('&amp;','&'),'https://example.invalid'));
 assert.ok(links.length >= categories.length);
 for(const link of links) assert.ok(categories.includes(link.searchParams.get('category')),link.href);
});
