import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlanetaryDataSection from "./components/PlanetaryDataSection";
import PlanetList from "./components/PlanetList";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PlanetaryDataSection />
      <div id="data">
        <PlanetList />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}

export default App;