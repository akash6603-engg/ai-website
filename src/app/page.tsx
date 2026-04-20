import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import AIAgents from "@/components/AIAgents";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Credibility from "@/components/Credibility";
import CaseStudies from "@/components/CaseStudies";
import Results from "@/components/Results";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <AIAgents />
        <HowItWorks />
        <WhyChooseUs />
        <Credibility />
        <CaseStudies />
        <Results />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
