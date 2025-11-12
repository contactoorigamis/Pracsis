import { useState } from 'react';
import { Menu, X, Brain } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Modelo CIIDE®', href: '#modelo-ciide' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Metodología', href: '#metodologia' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Clientes', href: '#clientes' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <Brain className="w-8 h-8 text-primary" strokeWidth={1.5} />
            <div>
              <h1 className="text-xl font-bold text-primary">PRACSIS</h1>
              <p className="text-xs text-neutral-300 -mt-1">Bienestar Organizacional</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-neutral-800 hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contacto"
              className="inline-flex items-center px-6 py-3 bg-accent hover:bg-accent-dark text-neutral-800 font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Agenda una reunión
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-neutral-800 hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-100">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-neutral-800 hover:bg-secondary/20 hover:text-primary rounded-lg transition-all"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-3 bg-accent hover:bg-accent-dark text-neutral-800 font-semibold text-center rounded-lg transition-all"
            >
              Agenda una reunión
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
