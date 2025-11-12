import { Linkedin, Mail, User } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Dr. Roberto Sánchez',
      role: 'Director & Psicólogo Organizacional',
      bio: 'Especialista en neurociencias aplicadas al trabajo. 20 años de experiencia en bienestar organizacional y desarrollo de liderazgo.',
      expertise: ['Neurociencias', 'Liderazgo', 'Coaching ejecutivo'],
    },
    {
      name: 'Dra. Andrea Torres',
      role: 'Coordinadora Modelo CIIDE®',
      bio: 'Psicóloga clínica con formación en medicina oriental. Experta en intervenciones de crisis y programas de bienestar integral.',
      expertise: ['Medicina oriental', 'Psicología clínica', 'Bienestar'],
    },
    {
      name: 'Lic. Felipe Morales',
      role: 'Consultor Senior',
      bio: 'Coach certificado ICF, especialista en inteligencia emocional y gestión del cambio organizacional.',
      expertise: ['Coaching', 'Inteligencia emocional', 'Cambio organizacional'],
    },
    {
      name: 'Dra. Claudia Ramírez',
      role: 'Especialista en Evaluación',
      bio: 'Psicóloga organizacional con maestría en métodos de investigación. Lidera sistemas de medición de impacto y evaluación de programas.',
      expertise: ['Evaluación', 'Investigación', 'Análisis de datos'],
    },
  ];

  return (
    <section id="equipo" className="py-20 bg-gradient-to-br from-neutral-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
            Nuestro <span className="text-primary">Equipo</span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            Profesionales altamente especializados con formación en neurociencias, psicología,
            coaching y medicina oriental.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-neutral-100"
            >
              <div className="relative h-64 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <User className="w-16 h-16 text-primary" strokeWidth={1.5} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-800 mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-neutral-300 leading-relaxed mb-4">{member.bio}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {member.expertise.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3 pt-4 border-t border-neutral-100">
                  <button className="p-2 text-neutral-300 hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-neutral-300 hover:text-primary transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 max-w-3xl">
            <h3 className="text-xl font-bold text-neutral-800 mb-3">
              Trabajamos con un equipo multidisciplinario
            </h3>
            <p className="text-neutral-300 leading-relaxed">
              Además de nuestro equipo permanente, colaboramos con una red de especialistas en
              diversas áreas: nutricionistas, médicos, terapeutas corporales y consultores
              organizacionales, garantizando intervenciones integrales y de excelencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
