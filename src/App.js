import NavComponent from './Components/nav-component';
import HeroComponent from './Components/hero-component';
import PerksComponent from './Components/perks-component';
import ProductiveComponent from './Components/productive-component';
import Testimonials from './Components/testimonials';
import EmailComponent from './Components/email-component';
import FooterComponent from './Components/footer-component';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavComponent />
      <HeroComponent />
      <div className="container">
        <PerksComponent />
        <ProductiveComponent />
        <Testimonials />
        <EmailComponent />
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
