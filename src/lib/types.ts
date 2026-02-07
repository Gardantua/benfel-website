export interface NavItem {
  title: string;
  href: string;
}

export type ProductCategory =
  | "biskuvi"
  | "dolgulu-biskuvi"
  | "kek";

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
}

export interface Product {
  id: string;
  slug?: string;
  name: string;
  category: ProductCategory;
  description: string;
  images: string[];
  isFeatured?: boolean;
  gridSpan?: "normal" | "wide" | "tall";
  // B2B Technical Specifications
  weights: string[];
  packaging: string;
  boxInfo?: string;
  code?: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
  linkedin: string;
  youtube: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  mapsLink: string;
  socials: SocialLinks;
}

export interface NavigationConfig {
  main: NavItem[];
  products: NavItem[];
}

export interface HeroContent {
  heading: string;
  subheading: string;
  primaryCta: string;
  secondaryCta: string;
  heroImage: string;
}

export interface CompanyInfo {
  established: number;
  facility: string;
  productionLines: number;
}

export interface SiteData {
  companyName: string;
  tagline: string;
  description: string;
  companyInfo: CompanyInfo;
  contact: ContactInfo;
  navigation: NavigationConfig;
  hero: HeroContent;
  stats: StatItem[];
  products: Product[];
  categories: CategoryInfo[];
}
