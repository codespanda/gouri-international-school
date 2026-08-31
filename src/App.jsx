import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import AcademicsSection from "@/components/AcademicsSection";
import CampusSection from "@/components/CampusSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import NewsSection from "@/components/NewsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <AcademicsSection />
        <CampusSection />
        <WhyChooseSection />
        <NewsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
