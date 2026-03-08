import { useEffect, useRef, useState } from 'react';
import { QrCode, MessageCircle, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const benefits = [
  'Menú digital ilimitado',
  'Diseño personalizado',
  'Códigos QR incluidos',
  'Actualizaciones sin límite',
  'Soporte técnico',
  'Estadísticas de uso'
];

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="contacto" 
      className="relative py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <Card 
          className={`glass rounded-3xl p-8 md:p-12 border border-orange-500/30 overflow-hidden transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 mb-6">
                <QrCode className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-orange-400 font-medium">¡Empezá hoy mismo!</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                ¿Listo para <span className="gradient-text">modernizar</span> tu restaurante?
              </h2>

              <p className="text-gray-400 mb-8">
                Unite a los restaurantes que ya disfrutan de los beneficios de un menú digital profesional. 
                Contactanos y en menos de 48 horas tendrás tu menú funcionando.
              </p>

              <div className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side - Contact Options */}
            <div className="space-y-4">
              <a 
                href="https://wa.me/541155786993"
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  size="lg" 
                  className="w-full btn-shine bg-green-500 hover:bg-green-600 text-white py-6 text-lg rounded-xl group"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Escribinos por WhatsApp
                  <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              <a 
                href="mailto:concodigoart@gmail.com"
                className="block"
              >
                <Button 
                  variant="outline"
                  size="lg" 
                  className="w-full border-gray-600 text-gray-300 hover:bg-white/10 py-6 text-lg rounded-xl group"
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Mandanos un email
                  <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              <a
                href="https://elmenu.ar/tucomida"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-gray-600 text-gray-300 hover:bg-white/10 py-6 text-lg rounded-xl group"
                >
                  <QrCode className="w-5 h-5 mr-3" />
                  Ver ejemplo en vivo
                  <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              <div className="pt-4 text-center">
                <p className="text-gray-500 text-sm">
                  Respuesta en menos de 24 horas
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Trust badges */}
        <div 
          className={`mt-12 flex flex-wrap justify-center gap-8 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">+50</p>
            <p className="text-gray-500 text-sm">Restaurantes</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">48hs</p>
            <p className="text-gray-500 text-sm">Tiempo de entrega</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">100%</p>
            <p className="text-gray-500 text-sm">Satisfacción</p>
          </div>
        </div>
      </div>
    </section>
  );
}
