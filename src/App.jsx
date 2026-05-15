// src/App.jsx

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlanetaryDataSection from "./components/PlanetaryDataSection";
import PlanetList from "./components/PlanetList";
import PlanetaryFacts from "./components/PlanetaryFacts";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Planetary Data */}
      <PlanetaryDataSection />

      {/* Planet Cards */}
      <section id="data">
        <PlanetList />
      </section>

      {/* Facts */}
      <section id="facts">
        <PlanetaryFacts />
      </section>

      {/* Contact */}
      <section id="contact">
        <ContactForm />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;