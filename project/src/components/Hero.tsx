import { ArrowRight, Brain } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 bg-gradient-to-br from-neutral-100 via-white to-secondary/10 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/20 rounded-full mb-6">
            <Brain className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Neurociencia aplicada al trabajo</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-800 mb-6 leading-tight">
            Bienestar Organizacional con Base{' '}
            <span className="text-primary">Neurocientífica</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Integramos psicología, neurociencia, coaching y medicina oriental en el{' '}
            <span className="font-semibold text-primary">Modelo CIIDE®</span> para fortalecer
            liderazgo, salud mental y cohesión de equipos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#modelo-ciide"
              className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Conoce el Modelo CIIDE®
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center px-8 py-4 bg-white hover:bg-neutral-100 text-primary font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg border-2 border-primary"
            >
              Explora nuestros servicios
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-neutral-300">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-neutral-300">Organizaciones impactadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-neutral-300">Satisfacción de clientes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5000+</div>
              <div className="text-sm text-neutral-300">Profesionales capacitados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
