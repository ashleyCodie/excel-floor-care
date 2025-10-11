import Hero from "./components/Hero";
import About from "./components/About";
import GroutTileCleaning from "./components/GroutTileCleaning";
import CarpetCleaning from "./components/CarpetCleaning";
import PhotoCarousel from "./components/PhotoCarousel";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <GroutTileCleaning />
      <CarpetCleaning />
      <PhotoCarousel />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
