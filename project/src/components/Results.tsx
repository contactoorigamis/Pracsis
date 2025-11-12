import { TrendingUp, Users, Award, Smile, Quote } from 'lucide-react';

export default function Results() {
  const metrics = [
    {
      icon: Smile,
      value: '95%',
      label: 'Satisfacción de clientes',
      color: 'text-primary',
    },
    {
      icon: TrendingUp,
      value: '40%',
      label: 'Mejora en productividad',
      color: 'text-primary-light',
    },
    {
      icon: Users,
      value: '65%',
      label: 'Reducción de rotación',
      color: 'text-secondary',
    },
    {
      icon: Award,
      value: '88%',
      label: 'Mejora en clima laboral',
      color: 'text-accent',
    },
  ];

  const testimonials = [
    {
      quote:
        'PRACSIS transformó nuestra cultura organizacional. El Modelo CIIDE® nos permitió abordar el bienestar desde una perspectiva científica y humana, con resultados medibles en clima laboral y compromiso.',
      author: 'María José González',
      role: 'Gerente de RRHH',
      company: 'ENAP Patagonia',
    },
    {
      quote:
        'La intervención de PRACSIS durante nuestra crisis organizacional fue fundamental. Su equipo profesional nos guió con empatía y evidencia científica hacia una recuperación exitosa del equipo.',
      author: 'Carlos Martínez',
      role: 'Director de Personas',
      company: 'Subsecretaría de Evaluación Social',
    },
    {
      quote:
        'Las capacitaciones en inteligencia emocional y liderazgo consciente han sido un pilar clave para fortalecer nuestros equipos. Metodología clara, profesionalismo excepcional y resultados concretos.',
      author: 'Patricia Silva',
      role: 'Coordinadora de Desarrollo',
      company: 'Universidad Católica',
    },
  ];

  return (
    <section id="resultados" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
            Resultados que <span className="text-primary">Transforman</span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            Medimos el impacto de cada intervención para garantizar transformación sostenible y
            resultados concretos.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-neutral-100 to-white rounded-2xl hover:shadow-lg transition-all duration-300"
              >
                <Icon className={`w-10 h-10 ${metric.color} mx-auto mb-4`} />
                <div className={`text-4xl font-bold ${metric.color} mb-2`}>{metric.value}</div>
                <div className="text-sm text-neutral-300">{metric.label}</div>
              </div>
            );
          })}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-neutral-800 text-center mb-12">
            Lo que dicen nuestros clientes
          </h3>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 relative"
              >
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-neutral-300 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-neutral-100 pt-4">
                  <p className="font-semibold text-neutral-800">{testimonial.author}</p>
                  <p className="text-sm text-neutral-300">{testimonial.role}</p>
                  <p className="text-sm text-primary font-medium mt-1">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para transformar tu organización?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Agenda una reunión sin compromiso y descubre cómo el Modelo CIIDE® puede impulsar el
            bienestar y resultados en tu empresa.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center px-8 py-4 bg-white hover:bg-neutral-100 text-primary font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Agenda tu consultoría gratuita
          </a>
        </div>
      </div>
    </section>
  );
}
