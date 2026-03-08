import { HeroSection } from './sections/HeroSection';
import { ProblemsSection } from './sections/ProblemsSection';
import { BenefitsSection } from './sections/BenefitsSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { CTASection } from './sections/CTASection';
import { Footer } from './sections/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <HeroSection />
      <ProblemsSection />
      <BenefitsSection />
      <HowItWorksSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
