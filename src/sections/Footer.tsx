import { QrCode, Instagram, Heart } from 'lucide-react';

const footerLinks = [
  {
    title: 'Servicio',
    links: [
      { label: 'Beneficios', href: '#beneficios' },
      { label: 'Cómo funciona', href: '#como-funciona' },
      { label: 'Ejemplos', href: '#' },
      { label: 'Precios', href: '#contacto' }
    ]
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre nosotros', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Testimonios', href: '#' },
      { label: 'Contacto', href: '#contacto' }
    ]
  },
  {
    title: 'Soporte',
    links: [
      { label: 'Centro de ayuda', href: '#' },
      { label: 'Preguntas frecuentes', href: '#' },
      { label: 'Actualizar menú', href: '#' },
      { label: 'Reportar problema', href: '#' }
    ]
  }
];

const socialLinks = [
  { icon: Instagram, href: 'https://www.instagram.com/concodigoart/', label: 'Instagram' }
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-500/10 rounded-xl">
                <QrCode className="w-6 h-6 text-orange-400" />
              </div>
              <span className="text-xl font-bold text-white">elmenu.ar</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-sm">
              Menús digitales modernos y profesionales para restaurantes argentinos. Escaneá, explorá, disfrutá.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 glass rounded-lg text-gray-400 hover:text-orange-400 hover:border-orange-500/30 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-white font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-orange-400 text-sm transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 elmenu.ar. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-red-400 fill-red-400" /> por{' '}
            <a href="https://www.concodigoart.com/" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors">conCódigoART</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
