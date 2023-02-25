import './App.scss';

import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Hero } from './blocks/Hero';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Contact />
      <Hero />
    </div>
  );
};

export default App;
