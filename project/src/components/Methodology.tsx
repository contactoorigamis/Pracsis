import { Brain, Heart, Building2 } from 'lucide-react';

export default function Methodology() {
  const pillars = [
    {
      icon: Brain,
      title: 'Mente',
      subtitle: 'Neurociencia Aplicada',
      description:
        'Comprendemos cómo funciona el cerebro en contextos de estrés, aprendizaje y toma de decisiones. Aplicamos principios de neuroplasticidad, regulación emocional y procesos cognitivos para optimizar el rendimiento y bienestar mental.',
      items: [
        'Gestión del estrés y burnout',
        'Neurobiología de las emociones',
        'Atención consciente y mindfulness',
        'Toma de decisiones bajo presión',
      ],
      gradient: 'from-primary/10 to-primary/5',
    },
    {
      icon: Heart,
      title: 'Cuerpo',
      subtitle: 'Medicina Oriental',
      description:
        'Integramos principios de medicina tradicional china, acupuntura y técnicas corporales para equilibrar la energía vital. El bienestar físico es fundamental para la salud mental y el desempeño organizacional.',
      items: [
        'Equilibrio energético y vitalidad',
        'Técnicas de regulación somática',
        'Prevención de enfermedades laborales',
        'Alimentación consciente',
      ],
      gradient: 'from-secondary/10 to-secondary/5',
    },
    {
      icon: Building2,
      title: 'Entorno',
      subtitle: 'Cultura Organizacional',
      description:
        'Transformamos espacios de trabajo en ecosistemas saludables. Diseñamos políticas, protocolos y prácticas que promueven la cohesión, el respeto y el sentido de pertenencia en la organización.',
      items: [
        'Clima laboral positivo',
        'Liderazgo empático y consciente',
        'Comunicación organizacional efectiva',
        'Políticas de bienestar integral',
      ],
      gradient: 'from-accent/10 to-accent/5',
    },
  ];

  return (
    <section id="metodologia" className="py-20 bg-gradient-to-br from-neutral-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
            Nuestra <span className="text-primary">Metodología</span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            Tres pilares fundamentales que se integran para crear transformación sostenible en las
            organizaciones.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className={`bg-gradient-to-br ${pillar.gradient} p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-neutral-100`}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neutral-800">{pillar.title}</h3>
                    <p className="text-sm text-primary font-medium">{pillar.subtitle}</p>
                  </div>
                </div>

                <p className="text-neutral-300 mb-6 leading-relaxed">{pillar.description}</p>

                <div className="space-y-3">
                  {pillar.items.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                      <span className="text-sm text-neutral-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">
              Integración Mente-Cuerpo-Entorno
            </h3>
            <p className="text-neutral-300 leading-relaxed mb-8">
              Nuestro enfoque reconoce que el bienestar organizacional no es posible sin la integración
              armoniosa de estos tres elementos. Solo cuando mente, cuerpo y entorno están alineados,
              las personas y organizaciones pueden alcanzar su máximo potencial de forma sostenible.
            </p>
            <div className="inline-flex items-center space-x-4 text-sm font-medium text-primary">
              <span className="px-4 py-2 bg-primary/10 rounded-full">Ciencia</span>
              <span className="text-neutral-300">+</span>
              <span className="px-4 py-2 bg-primary/10 rounded-full">Humanidad</span>
              <span className="text-neutral-300">+</span>
              <span className="px-4 py-2 bg-primary/10 rounded-full">Sostenibilidad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
