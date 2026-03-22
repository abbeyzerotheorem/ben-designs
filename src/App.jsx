import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import RevealOnScroll from './components/RevealOnScroll';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <RevealOnScroll>
          <About />
        </RevealOnScroll>
        <RevealOnScroll>
          <Skills />
        </RevealOnScroll>
        <RevealOnScroll>
          <Projects />
        </RevealOnScroll>
        <RevealOnScroll>
          <Contact />
        </RevealOnScroll>
      </main>
      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
        <p>© {new Date().getFullYear()} Benedict Oyelewo. All rights reserved.</p>
      </footer>
      <ScrollToTop />
    </>
  );
}

export default App;
