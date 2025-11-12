import { Building2 } from 'lucide-react';

export default function Clients() {
  const clients = [
    { name: 'ENAP Patagonia', sector: 'Energía' },
    { name: 'Subsecretaría de Evaluación Social', sector: 'Gobierno' },
    { name: 'ACHS', sector: 'Seguridad Laboral' },
    { name: 'Universidad Católica', sector: 'Educación' },
    { name: 'Ministerio de Salud', sector: 'Salud Pública' },
    { name: 'BancoEstado', sector: 'Finanzas' },
    { name: 'Codelco', sector: 'Minería' },
    { name: 'Fundación Chile', sector: 'Innovación' },
  ];

  return (
    <section id="clientes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
            Confían en <span className="text-primary">PRACSIS</span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            Trabajamos con organizaciones líderes en diversos sectores, impulsando su transformación
            hacia culturas de bienestar y alto desempeño.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-neutral-100 to-white p-8 rounded-2xl hover:shadow-lg transition-all duration-300 border border-neutral-100 flex flex-col items-center justify-center text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-neutral-800 mb-1">{client.name}</h3>
              <p className="text-xs text-primary font-medium">{client.sector}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">
              Experiencia en múltiples sectores
            </h3>
            <p className="text-neutral-300 leading-relaxed mb-8">
              Hemos trabajado con organizaciones públicas y privadas en sectores como energía, minería,
              salud, educación, gobierno y finanzas. Nuestra metodología se adapta a las necesidades
              específicas de cada industria, manteniendo siempre los más altos estándares de calidad y
              evidencia científica.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-neutral-800 mb-1">Sector Público</p>
                  <p className="text-sm text-neutral-300">
                    Ministerios, subsecretarías y servicios gubernamentales
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-neutral-800 mb-1">Sector Privado</p>
                  <p className="text-sm text-neutral-300">
                    Empresas mineras, energéticas, financieras y de servicios
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <p className="font-semibold text-neutral-800 mb-1">Tercer Sector</p>
                  <p className="text-sm text-neutral-300">
                    Universidades, fundaciones y organizaciones sin fines de lucro
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
