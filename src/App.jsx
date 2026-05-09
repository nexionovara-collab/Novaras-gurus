import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlanetList from "./components/PlanetList";
import PlanetaryFacts from "./components/PlanetaryFacts";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="data">
        <PlanetList />
      </div>
      <div id="facts">
        <PlanetaryFacts />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}

export default App;