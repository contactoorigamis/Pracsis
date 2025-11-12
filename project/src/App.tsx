import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Services from './components/Services';
import CIIDEModel from './components/CIIDEModel';
import Methodology from './components/Methodology';
import Results from './components/Results';
import Team from './components/Team';
import Clients from './components/Clients';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      <main>
        <Hero />
        <Vision />
        <Services />
        <CIIDEModel />
        <Methodology />
        <Results />
        <Team />
        <Clients />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
