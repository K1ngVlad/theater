import { useState } from 'react';

import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Hero } from './blocks/Hero';
import { About } from './blocks/About';
import { Projects } from './blocks/Projects';
import { Rating } from './blocks/Rating';
import { Partners } from './blocks/Partners';
import { Contacts } from './blocks/Contacts';
import { Footer } from './components/Footer';

import './App.scss';

const App = () => {
  const [popUp, setPopUp] = useState(false);
  return (
    <div className="app">
      <Header setPopUp={setPopUp} />
      <Contact />
      <Hero popUp={popUp} setPopUp={setPopUp} />
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
