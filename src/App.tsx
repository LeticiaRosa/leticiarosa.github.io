import { AboutMe } from './components/AboutMe';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Projects } from './components/Projects';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
}
