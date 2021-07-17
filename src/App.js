import logo from './logo.svg';
import './App.css';
import Logo from './logo.jpg'
import Lock from './lock.png'
import shield from './shield.png'
import web from './web.png'
import laptop from './laptop.png'
import person from './person.png'
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import DemoOneSection from './components/DemoOneSection';
import DemoTwoSection from './components/DemoTwoSection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <FeaturesSection/>
      <div className="about">
        <DemoOneSection/>
        <DemoTwoSection/>
      </div>
      <FooterSection/>
      

    </div>
  );
}

export default App;
