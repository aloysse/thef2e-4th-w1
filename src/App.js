import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroMarquee from "./components/HeroMarquee";
import Hero2 from "./components/Hero2";
import Banner from "./components/Banner";
import Subjects from "./components/Subjects";
import Schedule from "./components/Schedule";
import Reward from "./components/Reward";

function App() {
  const mdScreen = 768;
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <HeroMarquee />
      <Hero2 />
      <Banner mdScreen={mdScreen} />
      <Subjects />
      <Schedule />
      <Reward />
    </div>
  );
}

export default App;
