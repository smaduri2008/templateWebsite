import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyUsGrid from "./components/WhyUsGrid";
import SuiteOptions from "./components/SuiteOptions";
import ProfitCalculator from "./components/ProfitCalculator";
import AmenitiesList from "./components/AmenitiesList";
import TestimonialSlider from "./components/TestimonialSlider";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <WhyUsGrid />
      <div id="suites">
        <SuiteOptions />
      </div>
      <div id="calculator">
        <ProfitCalculator />
      </div>
      <div id="amenities">
        <AmenitiesList />
      </div>
      <div id="testimonials">
        <TestimonialSlider />
      </div>
      <ContactForm />
      <Footer />
    </main>
  );
}
