import { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'Av. Providencia 1208, Of. 1603\nProvidencia, Santiago, Chile',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+56 2 2234 5678\n+56 9 8765 4321',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contacto@pracsis.cl\ninfo@pracsis.cl',
    },
    {
      icon: Clock,
      title: 'Horario',
      content: 'Lunes a Viernes\n9:00 - 18:00',
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800 mb-4">
            Conversemos sobre tu <span className="text-primary">Organización</span>
          </h2>
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
            Agenda una reunión sin compromiso y descubre cómo podemos impulsar el bienestar y
            resultados en tu empresa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">Información de contacto</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">{info.title}</h4>
                        <p className="text-sm text-neutral-300 whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-neutral-800 mb-4">
                ¿Por qué elegirnos?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-sm text-neutral-300">
                    Metodología única respaldada por neurociencias
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-sm text-neutral-300">
                    Equipo multidisciplinario de alto nivel
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-sm text-neutral-300">
                    Resultados medibles y evaluación continua
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-sm text-neutral-300">
                    Más de 15 años de experiencia en el sector
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border-2 border-neutral-100 p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">Envíanos un mensaje</h3>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-800 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-800 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-800 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="+56 9 1234 5678"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-800 mb-2">
                    Empresa u organización
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-800 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-neutral-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Cuéntanos sobre tus necesidades..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitted ? (
                    'Mensaje enviado'
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>

              {isSubmitted && (
                <div className="mt-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
                  <p className="text-sm text-primary font-medium text-center">
                    Gracias por tu mensaje. Te contactaremos pronto.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
