import { useEffect, useState } from 'react';
import { QrCode, ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Sparkles className="w-4 h-4 text-orange-400" />
          <span className="text-sm text-gray-300">La plataforma de menús digitales para restaurantes</span>
        </div>

        {/* Main Title */}
        <h1 
          className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="gradient-text">elmenu</span>
          <span className="text-white">.ar</span>
        </h1>

        {/* Subtitle */}
        <p 
          className={`text-xl sm:text-2xl md:text-3xl text-gray-300 mb-4 font-light transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Tu carta digital, con tu marca, lista en 48 horas
        </p>

        {/* Description */}
        <p 
          className={`text-base sm:text-lg text-gray-400 mb-10 max-w-2xl mx-auto transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Tus clientes escanean un código QR y acceden al menú desde su celular al instante. Sin apps, sin papel, siempre actualizado.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Button 
            size="lg" 
            className="btn-shine bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full animate-pulse-glow"
            onClick={() => scrollToSection('contacto')}
          >
            <QrCode className="w-5 h-5 mr-2" />
            Quiero mi menú en elmenu.ar
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-gray-600 text-gray-300 hover:bg-white/10 px-8 py-6 text-lg rounded-full"
            onClick={() => scrollToSection('beneficios')}
          >
            Conocer más
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-600 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <button 
          onClick={() => scrollToSection('problemas')}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors"
        >
          <span className="text-sm">Descubre por qué cambiar</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl" />
    </section>
  );
}
