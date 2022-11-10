import NavComponent from './Components/nav-component';
import HeroComponent from './Components/hero-component';
import PerksComponent from './Components/perks-component';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavComponent />
      <HeroComponent />
      <div className="container">
        <PerksComponent />

      </div>
    </div>
  );
}

export default App;
