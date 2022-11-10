import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroMarquee from "./components/HeroMarquee";
import Hero2 from "./components/Hero2";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <HeroMarquee />
      <Hero2 />
      <Banner />
    </div>
  );
}

export default App;
