import { Users, AlertCircle, Heart, GraduationCap, FileCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Users,
      title: 'Coaching ejecutivo y liderazgo',
      description:
        'Acompañamiento personalizado para líderes y equipos directivos, fortaleciendo competencias de liderazgo consciente, comunicación efectiva y toma de decisiones.',
      color: 'from-primary/10 to-primary/20',
      iconBg: 'bg-primary/10',
    },
    {
      icon: AlertCircle,
      title: 'Intervenciones en crisis organizacional',
      description:
        'Respuesta especializada ante situaciones críticas: burnout, conflictos de equipo, cambios organizacionales y eventos traumáticos en el trabajo.',
      color: 'from-accent-light/10 to-accent-light/20',
      iconBg: 'bg-accent-light/10',
    },
    {
      icon: Heart,
      title: 'Programas de bienestar laboral',
      description:
        'Diseño e implementación de programas integrales que promueven la salud física, mental y emocional de los colaboradores, basados en evidencia.',
      color: 'from-secondary/10 to-secondary/20',
      iconBg: 'bg-secondary/20',
    },
    {
      icon: GraduationCap,
      title: 'Capacitaciones socioemocionales',
      description:
        'Talleres y formaciones en inteligencia emocional, manejo del estrés, mindfulness, comunicación no violenta y habilidades de autorregulación.',
      color: 'from-accent/10 to-accent/20',
      iconBg: 'bg-accent/20',
    },
    {
      icon: FileCheck,
      title: 'Asesoría técnica en gestión del bienestar',
      description:
        'Consultoría estratégica para diseñar políticas, protocolos y sistemas de gestión de bienestar alineados con normativas y mejores prácticas.',
      color: 'from-primary-light/10 to-primary-light/20',
      iconBg: 'bg-primary-light/10',
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-neutral-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            Soluciones integrales de bienestar organizacional fundamentadas en neurociencias y
            psicología aplicada al trabajo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group p-8 bg-gradient-to-br ${service.color} rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20`}
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 ${service.iconBg} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">{service.title}</h3>
                <p className="text-neutral-300 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Solicita una consultoría
          </a>
        </div>
      </div>
    </section>
  );
}
