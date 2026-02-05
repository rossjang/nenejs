import Header from "@/components/landing/header";
import HeroSection from "@/components/landing/hero-section";
import SocialProof from "@/components/landing/social-proof";
import Features from "@/components/landing/features";
import Showcase from "@/components/landing/showcase";
import CTASection from "@/components/landing/cta-section";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-slate-100">
      <Header />
      <main className="w-full">
        <HeroSection />
        <SocialProof />
        <Features />
        <Showcase />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
