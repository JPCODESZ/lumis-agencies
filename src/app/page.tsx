import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import HowItWorks from "@/components/home/HowItWorks";
import UseCases from "@/components/home/UseCases";
import DemoPreview from "@/components/home/DemoPreview";
import Testimonials from "@/components/home/Testimonials";
import Integrations from "@/components/home/Integrations";
import PricingPreview from "@/components/home/PricingPreview";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <UseCases />
        <DemoPreview />
        <Testimonials />
        <Integrations />
        <PricingPreview />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
