import { HeroSection } from "@/components/home/HeroSection";
import { StatsCounter } from "@/components/home/StatsCounter";
import { BrandsShowcase } from "@/components/home/BrandsShowcase";
import { BentoShowcase } from "@/components/home/BentoShowcase";
import { VideoSection } from "@/components/home/VideoSection";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { CertificationsStrip } from "@/components/home/CertificationsStrip";
import { Newsletter } from "@/components/home/Newsletter";
import { CTASection } from "@/components/home/CTASection";
import { generateOrganizationSchema } from "@/lib/metadata";

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <HeroSection />
      <StatsCounter />
      <BrandsShowcase />
      <BentoShowcase />
      <VideoSection />
      <AboutTeaser />
      <CertificationsStrip />
      <Newsletter />
      <CTASection />
    </>
  );
}
