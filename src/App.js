import './App.scss';

import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Hero } from './blocks/Hero';
import { About } from './blocks/About';
import { Projects } from './blocks/Projects';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Contact />
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default App;
