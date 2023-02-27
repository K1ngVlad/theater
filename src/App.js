import './App.scss';

import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Hero } from './blocks/Hero';
import { About } from './blocks/About';
import { Projects } from './blocks/Projects';
import { Rating } from './blocks/Rating';
import { Partners } from './blocks/Partners';
import { Contacts } from './blocks/Contacts';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Contact />
      <Hero />
      <About />
      <Projects />
      <Rating />
      <Partners />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
