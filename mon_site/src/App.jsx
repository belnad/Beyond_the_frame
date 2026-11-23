import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Projects from '../pages/Projects/Projets';
import Certifications from '../pages/Certification/Certification';
import Hobbies from '../pages/Hobbies/Hobbies';
import Contact from '../pages/Contact/Contact';


function App() {
  return (
    <BrowserRouter>
      <main className="portfolio">
        <header className="navbar">
          <link className="logo" to="/">
            NB<span>.</span>
          </link>

          <nav >
            <Link to="/home">Accueil</Link>
            <Link to="/about">À propos</Link>
            <Link to="/certifications">Certifications</Link>
            <Link to="/projects">Projets</Link>
            <Link to="/hobbies">Hobbies</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/*<section className="hero" id="accueil">
          <p className="eyebrow">
            CYBERSÉCURITÉ · INTELLIGENCE ARTIFICIELLE
          </p>

          <h1>
            Construire. <span>Sécuriser.</span>
            <br />
            Innover.
          </h1>

          <p className="intro">
            Bienvenue dans mon univers. Je partage ici mes projets,
            mes apprentissages et mes explorations technologiques.
          </p>

          <a className="cta" href="#projets">
            Découvrir mes projets ↗
          </a>
        </section>

        <section className="projects" id="projets">
          <p className="eyebrow">CE QUE JE CONSTRUIS</p>
          <h2>Mes projets</h2>

          <div className="project-grid">
            <article className="project-card">
              <span>01 / CYBER</span>
              <h3>Détection d'intrusions</h3>
              <p>Analyse de logs et détection d'anomalies.</p>
            </article>

            <article className="project-card">
              <span>02 / IA</span>
              <h3>Machine Learning</h3>
              <p>Expérimentations autour de la donnée et des modèles.</p>
            </article>

            <article className="project-card">
              <span>03 / LAB</span>
              <h3>Mon laboratoire</h3>
              <p>Mes apprentissages, outils et expérimentations techniques.</p>
            </article>
          </div>
        </section>*/}

        <footer id="contact">
          <p>Un projet en tête ? Restons en contact.</p>
          <p>© 2026 — Portfolio personnel</p>
        </footer>
      </main>
    </BrowserRouter>
  );
}

export default App;
