import { useEffect, useRef, useState } from 'react';
import { 
  QrCode, 
  Smartphone, 
  RefreshCw, 
  Zap, 
  TrendingUp, 
  Leaf,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { Card } from '@/components/ui/card';

const benefits = [
  {
    icon: QrCode,
    title: 'Acceso Instantáneo',
    description: 'Tus clientes escanean el código QR y acceden al menú inmediatamente. Sin descargas, sin esperas.',
    highlight: 'Escanea y listo'
  },
  {
    icon: Smartphone,
    title: 'Sin Apps Instaladas',
    description: 'Funciona directamente en el navegador del celular. Tus clientes no necesitan instalar nada.',
    highlight: '100% Web'
  },
  {
    icon: RefreshCw,
    title: 'Siempre Actualizado',
    description: 'Cambia precios, agrega platos o modifica disponibilidad en tiempo real. Tus clientes siempre ven la versión más reciente.',
    highlight: 'Tiempo real'
  },
  {
    icon: Zap,
    title: 'Experiencia Moderna',
    description: 'Diseño profesional y responsive que se adapta perfectamente a cualquier dispositivo.',
    highlight: 'Diseño premium'
  },
  {
    icon: TrendingUp,
    title: 'Ahorro de Costos',
    description: 'Olvídate de los gastos de impresión y reimpresión de cartas. Una inversión que se paga sola.',
    highlight: 'Económico'
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Reduce el consumo de papel y contribuye al cuidado del medio ambiente.',
    highlight: 'Sustentable'
  }
];

const comparisonFeatures = [
  'Diseño personalizado con tu marca',
  'Categorías y buscador de platos',
  'Fotos de alta calidad para cada platillo',
  'Precios actualizables al instante',
  'Indicadores de disponibilidad',
  'Compatible con todos los dispositivos',
  'Estadísticas de visualización',
  'Soporte técnico incluido'
];

export function BenefitsSection() {
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
      id="beneficios" 
      className="relative py-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-gray-300">La solución perfecta</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Tu menú, <span className="gradient-text">digitalizado</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Una experiencia digital que impresionará a tus clientes y simplificará tu operación
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <Card 
              key={benefit.title}
              className={`feature-card p-6 glass border-gray-700/50 transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-orange-500/10">
                  <benefit.icon className="w-6 h-6 text-orange-400" />
                </div>
                <span className="text-xs font-medium text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full">
                  {benefit.highlight}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </Card>
          ))}
        </div>

        {/* Comparison Section */}
        <div 
          className={`glass rounded-3xl p-8 md:p-12 border border-orange-500/20 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Todo lo que necesitas, <span className="gradient-text">en un solo lugar</span>
              </h3>
              <p className="text-gray-400 mb-8">
                Nuestros menús digitales incluyen todas las funcionalidades que tu restaurante necesita para ofrecer una experiencia excepcional.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {comparisonFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center">
              <img
                src="/mockup-phones.png"
                alt="Vista previa del menú digital en celular"
                className="w-full max-w-md drop-shadow-2xl"
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
