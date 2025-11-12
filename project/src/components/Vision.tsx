import { Target, Heart, Lightbulb } from 'lucide-react';

export default function Vision() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-6">
            Transformamos organizaciones desde la{' '}
            <span className="text-primary">ciencia del bienestar</span>
          </h2>
          <p className="text-lg text-neutral-300 leading-relaxed">
            PRACSIS es una consultora especializada en bienestar organizacional y desarrollo humano,
            fundamentada en neurociencias, psicología, coaching y medicina oriental. Nuestro enfoque
            integrador promueve organizaciones más humanas, resilientes y sostenibles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-neutral-800 mb-4">Misión</h3>
            <p className="text-neutral-300 leading-relaxed">
              Promover el bienestar integral en las organizaciones mediante intervenciones basadas en
              evidencia científica y enfoque humanizado del trabajo.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/20 hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 rounded-2xl mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-neutral-800 mb-4">Visión</h3>
            <p className="text-neutral-300 leading-relaxed">
              Ser referentes latinoamericanos en bienestar organizacional, liderando la transformación
              cultural hacia entornos laborales saludables y sostenibles.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/20 hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-2xl mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-neutral-800 mb-4">Valores</h3>
            <p className="text-neutral-300 leading-relaxed">
              Integridad, evidencia científica, innovación, empatía y compromiso con el desarrollo
              humano y la salud mental organizacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
