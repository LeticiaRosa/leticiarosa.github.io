import { AboutMe } from './components/AboutMe';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <ContactForm />
      <Footer />
    </div>
  );
}
