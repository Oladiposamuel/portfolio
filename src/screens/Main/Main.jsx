import React, { useState, useContext, useEffect } from 'react';
import './main.css';
import Home from '../Home/Home';
import About from '../About/About';
import { NavProvider } from '../../Navigation/context/navContext';
import { NavContext } from '../../Navigation/context/navContext';
import { ScreenContext } from '../../Navigation/context/screenContext';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../../Navigation/navLinks';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

const Main = () => {

  const { screen, setScreen, paginate } = useContext(ScreenContext);

  //console.log(screen);

  let skillsScreen;
  if(screen === 'Skills') {
    skillsScreen = true
  } else if(screen !== 'Skills') {
    skillsScreen = false;
  }

  let aboutScreen;
  if(screen === 'About') {
    aboutScreen = true
  } else if(screen !== 'About') {
    aboutScreen = false;
  }

  let homeScreen;
  if(screen === 'Home') {
    homeScreen = true
  } else if(screen !== 'Home') {
    homeScreen = false;
  }

  return (
    <main className='main'>
      <AnimatePresence>
        {homeScreen && <Home />}
      </AnimatePresence>

      {<About />}
      {<Skills />}
      <Contact />
    </main>
  )
}

export default Main