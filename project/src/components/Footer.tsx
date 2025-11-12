import { Brain, Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    servicios: [
      { label: 'Coaching ejecutivo', href: '#servicios' },
      { label: 'Intervenciones en crisis', href: '#servicios' },
      { label: 'Bienestar laboral', href: '#servicios' },
      { label: 'Capacitaciones', href: '#servicios' },
    ],
    empresa: [
      { label: 'Sobre nosotros', href: '#inicio' },
      { label: 'Modelo CIIDE®', href: '#modelo-ciide' },
      { label: 'Equipo', href: '#equipo' },
      { label: 'Clientes', href: '#clientes' },
    ],
    recursos: [
      { label: 'Blog', href: '#blog' },
      { label: 'Casos de éxito', href: '#resultados' },
      { label: 'Metodología', href: '#metodologia' },
      { label: 'Contacto', href: '#contacto' },
    ],
  };

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Brain className="w-8 h-8" strokeWidth={1.5} />
              <div>
                <h3 className="text-2xl font-bold">PRACSIS</h3>
                <p className="text-sm opacity-80">Bienestar Organizacional</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed mb-6 max-w-sm">
              Transformamos organizaciones mediante el Modelo CIIDE®, integrando neurociencias,
              psicología, coaching y medicina oriental para un bienestar sostenible.
            </p>

            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 opacity-80" />
                <span className="opacity-90">Av. Providencia 1208, Of. 1603<br />Santiago, Chile</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 opacity-80" />
                <span className="opacity-90">+56 2 2234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0 opacity-80" />
                <span className="opacity-90">contacto@pracsis.cl</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Servicios</h4>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm opacity-90">
              <a href="#" className="hover:opacity-100 hover:text-accent transition-all">
                Política de privacidad
              </a>
              <a href="#" className="hover:opacity-100 hover:text-accent transition-all">
                Términos de servicio
              </a>
              <a href="#" className="hover:opacity-100 hover:text-accent transition-all">
                Cookies
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-primary transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-6 text-center text-sm opacity-80">
            <p>© {currentYear} PRACSIS. Todos los derechos reservados. Modelo CIIDE® es una marca registrada.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
