import type { Metadata } from "next";
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import ShowcaseHero from "@/components/showcase/showcase-hero";
import ShowcaseGrid from "@/components/showcase/showcase-grid";
import SubmitCTA from "@/components/showcase/submit-cta";

export const metadata: Metadata = {
  title: "Showcase | nene.js",
  description:
    "Explore production apps and community projects built with nene.js",
};

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main>
        <ShowcaseHero />
        <ShowcaseGrid />
        <SubmitCTA />
      </main>
      <Footer />
    </div>
  );
}
