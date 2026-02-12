import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import CTASection from "@/components/landing/cta-section";
import FeaturesHero from "@/components/features/features-hero";
import FeatureSection from "@/components/features/feature-section";
import ComparisonTable from "@/components/features/comparison-table";
import { fetchFeatures, fetchComparison } from "@/lib/features";

export default async function FeaturesPage() {
  const [features, comparison] = await Promise.all([
    fetchFeatures(),
    fetchComparison(),
  ]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100">
      <Header />
      <main className="w-full">
        <FeaturesHero />

        {features.map((feature) => (
          <FeatureSection
            key={feature.id}
            title={feature.title}
            description={feature.description}
            bullets={feature.bullets}
            codeExample={feature.codeExample}
            codeFilename={feature.codeFilename}
            accentColor={feature.accentColor}
            reversed={feature.reversed}
          />
        ))}

        <ComparisonTable rows={comparison} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
