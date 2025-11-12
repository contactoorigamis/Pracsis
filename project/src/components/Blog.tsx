import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

export default function Blog() {
  const articles = [
    {
      title: 'Neurociencias y Liderazgo: Cómo el cerebro influye en la toma de decisiones',
      excerpt:
        'Exploramos los últimos hallazgos en neurociencias aplicadas al liderazgo organizacional y cómo pueden transformar la forma en que dirigimos equipos.',
      author: 'Dr. Roberto Sánchez',
      date: '15 Nov 2025',
      category: 'Neurociencias',
      readTime: '8 min',
    },
    {
      title: 'Burnout organizacional: Prevención desde la medicina oriental',
      excerpt:
        'Un enfoque integrador que combina psicología occidental y medicina tradicional china para prevenir y tratar el síndrome de burnout en el trabajo.',
      author: 'Dra. Andrea Torres',
      date: '10 Nov 2025',
      category: 'Bienestar',
      readTime: '6 min',
    },
    {
      title: 'El Modelo CIIDE® en acción: Caso de éxito en minería',
      excerpt:
        'Análisis detallado de la implementación del Modelo CIIDE® en una empresa minera, con resultados medibles en clima laboral y productividad.',
      author: 'Lic. Felipe Morales',
      date: '5 Nov 2025',
      category: 'Casos de éxito',
      readTime: '10 min',
    },
    {
      title: 'Inteligencia emocional en equipos de alto rendimiento',
      excerpt:
        'Cómo desarrollar competencias socioemocionales en equipos para mejorar la colaboración, comunicación y resultados organizacionales.',
      author: 'Dra. Claudia Ramírez',
      date: '1 Nov 2025',
      category: 'Desarrollo',
      readTime: '7 min',
    },
    {
      title: 'Mindfulness corporativo: Más allá de la moda',
      excerpt:
        'Evidencia científica sobre los beneficios del mindfulness en contextos laborales y cómo implementarlo de forma efectiva en tu organización.',
      author: 'Dr. Roberto Sánchez',
      date: '28 Oct 2025',
      category: 'Prácticas',
      readTime: '9 min',
    },
    {
      title: 'Medición de bienestar organizacional: Indicadores clave',
      excerpt:
        'Guía práctica para evaluar el bienestar en tu organización mediante indicadores científicamente validados y herramientas de medición.',
      author: 'Dra. Claudia Ramírez',
      date: '22 Oct 2025',
      category: 'Evaluación',
      readTime: '12 min',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-neutral-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Contenido de valor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
            Blog y <span className="text-primary">Recursos</span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            Artículos especializados sobre bienestar organizacional, neurociencias, liderazgo y salud
            mental en el trabajo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-neutral-100"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-primary/30 group-hover:scale-110 transition-transform duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                  <span className="text-xs text-neutral-300">{article.readTime} lectura</span>
                </div>

                <h3 className="text-lg font-bold text-neutral-800 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                  <div className="flex items-center space-x-3 text-xs text-neutral-300">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-neutral-300">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>

                <button className="mt-4 flex items-center text-sm font-semibold text-primary hover:text-primary-dark transition-colors group">
                  Leer más
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#blog"
            className="inline-flex items-center px-8 py-4 bg-white hover:bg-neutral-100 text-primary font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg border-2 border-primary"
          >
            Ver todos los artículos
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
