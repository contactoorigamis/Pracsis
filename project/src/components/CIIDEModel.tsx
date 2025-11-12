import { Microscope, Activity, Network, TrendingUp, BarChart3, ArrowRight } from 'lucide-react';

export default function CIIDEModel() {
  const pillars = [
    {
      icon: Microscope,
      letter: 'C',
      title: 'Ciencia',
      description:
        'Fundamentación en neurociencias, psicología organizacional y evidencia empírica para todas nuestras intervenciones.',
      color: 'bg-primary',
    },
    {
      icon: Activity,
      letter: 'I',
      title: 'Intervención',
      description:
        'Acciones concretas y personalizadas: coaching, talleres, protocolos de crisis y programas de prevención adaptados.',
      color: 'bg-primary-light',
    },
    {
      icon: Network,
      letter: 'I',
      title: 'Integración',
      description:
        'Articulación sistémica de mente, cuerpo y entorno laboral para un bienestar sostenible y coherente.',
      color: 'bg-secondary',
    },
    {
      icon: TrendingUp,
      letter: 'D',
      title: 'Desarrollo',
      description:
        'Crecimiento continuo de competencias emocionales, liderazgo consciente y cultura organizacional saludable.',
      color: 'bg-accent',
    },
    {
      icon: BarChart3,
      letter: 'E',
      title: 'Evaluación',
      description:
        'Medición rigurosa de impacto mediante indicadores de clima, productividad, satisfacción y salud mental.',
      color: 'bg-accent-dark',
    },
  ];

  return (
    <section id="modelo-ciide" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-sm font-semibold text-primary">Nuestro método exclusivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-6">
            Modelo <span className="text-primary">CIIDE®</span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Metodología integral que integra cinco ejes fundamentales para transformar
            organizaciones desde el bienestar basado en evidencia científica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-neutral-100 to-white p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-neutral-100 hover:border-primary/30"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 ${pillar.color} text-white rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8" strokeWidth={2} />
                </div>
                <div className="text-4xl font-bold text-primary/20 mb-2">{pillar.letter}</div>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">{pillar.title}</h3>
                <p className="text-sm text-neutral-300 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-800 mb-6 text-center">
              ¿Por qué el Modelo CIIDE® es efectivo?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Basado en evidencia</h4>
                  <p className="text-neutral-300 text-sm">
                    Cada intervención está respaldada por investigación neurocientífica y psicológica.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Enfoque holístico</h4>
                  <p className="text-neutral-300 text-sm">
                    Integramos mente, cuerpo y contexto organizacional en cada programa.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Resultados medibles</h4>
                  <p className="text-neutral-300 text-sm">
                    Sistema robusto de evaluación y seguimiento de indicadores de impacto.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Personalización</h4>
                  <p className="text-neutral-300 text-sm">
                    Adaptamos cada intervención a la realidad y necesidades específicas de tu organización.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <a
                href="#contacto"
                className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Implementa el Modelo CIIDE® en tu organización
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
