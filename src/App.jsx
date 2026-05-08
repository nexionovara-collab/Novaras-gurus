import ContactForm from "./components/Contact-form-components/ContactForm";
import PlanetList from "./components/Planet-cards-components/PlanetList";

function App() {
  return (
    <div className="min-h-screen">
      <PlanetList />
      <ContactForm />
    </div>
  );
}

export default App;