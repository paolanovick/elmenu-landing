import { useEffect, useRef, useState } from 'react';
import { MessageSquare, Palette, QrCode, Rocket, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Contactanos',
    description: 'Cuéntanos sobre tu restaurante y envíanos tu menú actual. Podés escribirnos por WhatsApp o email.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    number: '02',
    icon: Palette,
    title: 'Diseñamos tu Menú',
    description: 'Creamos un diseño personalizado con tu marca, colores y estilo. Incluye fotos, descripciones y precios.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    number: '03',
    icon: QrCode,
    title: 'Generamos tu QR',
    description: 'Creamos códigos QR únicos para tu restaurante. Podés imprimirlos en stickers, porta-menús o donde prefieras.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    number: '04',
    icon: Rocket,
    title: '¡Listo para usar!',
    description: 'Tus clientes escanean y acceden al menú instantáneamente. Vos podés actualizarlo cuando quieras.',
    color: 'from-green-500 to-green-600'
  }
];

export function HowItWorksSection() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="como-funciona" 
      className="relative py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <CheckCircle2 className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-gray-300">Proceso simple</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Cómo <span className="gradient-text">funciona</span>?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            En solo 4 pasos tendrás tu menú digital funcionando. Nosotros nos encargamos de todo.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/30 via-purple-500/30 via-orange-500/30 to-green-500/30" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`relative transition-all duration-700 ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Step Card */}
                <div className="glass rounded-2xl p-6 border border-gray-700/50 h-full hover:border-orange-500/30 transition-colors">
                  {/* Number Badge */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} mb-6`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Step Number */}
                  <span className="absolute -top-3 -right-3 text-5xl font-bold text-gray-700/50">
                    {step.number}
                  </span>

                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-20 -right-4 z-10">
                    <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline for mobile */}
        <div className="lg:hidden mt-12 flex justify-center">
          <div className="flex items-center gap-2">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${step.color}`} />
                {index < steps.length - 1 && (
                  <div className="w-8 h-0.5 bg-gray-700" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
