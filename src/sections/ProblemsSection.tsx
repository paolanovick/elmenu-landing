import { useEffect, useRef, useState } from 'react';
import { FileText, FolderOpen, AlertTriangle, XCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const problems = [
  {
    icon: FolderOpen,
    title: 'Menú en Google Drive',
    issues: [
      'Los clientes deben buscar el enlace o escanear un QR que los lleva a una carpeta',
      'Tienen que descargar archivos PDF pesados',
      'No se ve profesional ni moderno',
      'Difícil de actualizar y mantener organizado',
      'No funciona bien en todos los dispositivos'
    ],
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30'
  },
  {
    icon: FileText,
    title: 'Cartas de Papel Tradicionales',
    issues: [
      'Se ensucian, rompen y desgastan rápidamente',
      'Costos constantes de reimpresión',
      'Imposible actualizar precios o platos al instante',
      'No es higiénico (especialmente post-pandemia)',
      'Impacto ambiental negativo'
    ],
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30'
  }
];

export function ProblemsSection() {
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
      id="problemas" 
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
            <AlertTriangle className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-gray-300">El problema actual</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Sigues usando <span className="gradient-text">métodos obsoletos</span>?
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Muchos restaurantes aún dependen de soluciones que frustran a sus clientes y generan costos innecesarios
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <Card 
              key={problem.title}
              className={`p-8 glass ${problem.borderColor} border-2 transition-all duration-700 hover:scale-[1.02] ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-4 rounded-xl ${problem.bgColor}`}>
                  <problem.icon className={`w-8 h-8 ${problem.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white">{problem.title}</h3>
              </div>

              <ul className="space-y-4">
                {problem.issues.map((issue, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className={`w-5 h-5 ${problem.color} flex-shrink-0 mt-0.5`} />
                    <span className="text-gray-400">{issue}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Bottom Message */}
        <div 
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-xl text-gray-300">
            Hay una <span className="text-orange-400 font-semibold">mejor manera</span> de presentar tu menú
          </p>
        </div>
      </div>
    </section>
  );
}
