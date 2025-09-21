import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Gallery } from "./components/Gallery";
import { About } from "./components/About";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="work">
          <Gallery />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <footer className="py-8 px-6 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>&copy; 2024 Jino Butaslac. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}