import React, { useState, useEffect, useContext } from 'react';
import Nav from '../../Navigation/Nav';
import './home.css';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-web';
import ArrowDown from '../../lotties/down-arrow.json';
import { NavContext } from '../../Navigation/context/navContext';
import { ScreenContext } from '../../Navigation/context/screenContext';

const Home = () => {

  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

  const { screen, setScreen, paginate } = useContext(ScreenContext);

  let isDeskTop = window.matchMedia('(max-width: 768px)');
  //console.log(isDeskTop.matches);

  //console.log(screen);

  let homeScreen;
  if(screen === 'Home') {
    homeScreen = true
  } else if(screen !== 'Home') {
    homeScreen = false;
  }

  const exitVariant = {
    hidden: {
      opacity: 1,
      scale: 0.5,
    },
    visible: {
      zIndex: 20,
      scale: 1,
      opacity: homeScreen ? 1 : 0,
      transition: {
        type: 'spring',
        delay: 0,
        duration: .5,
      }
    },
    exit: {
      //scale: 0.5,
    }
  }

  const parentVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      zIndex: 2,
      opacity: homeScreen ? 1 : 0,
      transition: {
        //when: "beforeChildren",
        type: 'spring',
        duration: 5,
        staggerChildren: .1,
      }
    }
  }

  const childVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity:  homeScreen ? 1 : 0,
      transition: {
        type: 'spring',
        duration: .5,
        staggerChildren: .1,
      }
    }
  }

  const backgroundEffect = {
    hidden: {
      opacity: 0, 
      scale: 1, 
    },
    visible: {
      opacity: 0, 
      scale: 0.5, 
      transition: {
        delay: .1, 
        duration: 1,
      }
    }
  }

  const contact = (e) => {
    e.preventDefault();
    setActiveNavLinkId('Contact');
    paginate('Contact');
    document.getElementById('contactContainer').scrollIntoView({ behavior: 'smooth' });
  }

  useEffect(() => {
    const instance = Lottie.loadAnimation({
        container: document.querySelector("#arrow-down"),
        animationData: ArrowDown,
    })

    return () => instance.destroy();
  }, [])

  return (
    <motion.div
      key='Home'
      variants={exitVariant}
      initial= "hidden"
      animate="visible"
      exit='exit'
     className='home' id='homeContainer'>

      <Nav />

        <motion.svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.com/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560"
          style={{width: '100%', paddingBottom: '92%', height: '100vh', overflow: 'visible'}} className= "background-svg" >
              <g mask="url(&quot;#SvgjsMask1126&quot;)" fill="none">
          <rect width="1440" height="560" x="0" y="0" fill="rgba(17, 17, 17, 0.97)"></rect>
              </g>
        <defs>
            <mask id="SvgjsMask1126">
                <rect width="1440" height="560" fill="#ffffff"></rect>
            </mask>
            <linearGradient x1="0%" y1="0%" x2="100%" y2="100%" id="SvgjsLinearGradient1127">
                <stop stopColor="rgba(192, 192, 192, 0)" offset="0"></stop>
                <stop stopColor="rgba(192, 192, 192, 0.44)" offset="1"></stop>
            </linearGradient>
            <linearGradient x1="100%" y1="100%" x2="0%" y2="0%" id="SvgjsLinearGradient1128">
                <stop stopColor="rgba(192, 192, 192, 0)" offset="0"></stop>
                <stop stopColor="rgba(192, 192, 192, 0.44)" offset="1"></stop>
            </linearGradient>
        </defs>
      </motion.svg>

      <motion.div
        initial={{y: -100}}
        animate={{y:0}}
        transition={{type: 'spring', mass: 0.5, damping: 7, duration: 2, delay: 1.2}}
       className='nav-box'>
        <div className='name-box'><h1 className='name-text'>Oladipo Samuel</h1></div>
        <button className='btn' onClick={contact}>Contact</button>
      </motion.div>

      <motion.div
        variants={parentVariant}
        initial= "hidden"
        animate="visible"
       className='big-text-box'>
        <motion.span
          variants={childVariant}
         className='full-stack'>
          <motion.span
            variants={childVariant}
          >F</motion.span>
           <motion.span
            variants={childVariant}
          >U</motion.span>
           <motion.span
            variants={childVariant}
          >L</motion.span>
           <motion.span
            variants={childVariant}
          >L</motion.span>
           <motion.span
            variants={childVariant}
          >-</motion.span>
          <motion.span
            variants={childVariant}
          >S</motion.span>
          <motion.span
            variants={childVariant}
          >T</motion.span>
          <motion.span
            variants={childVariant}
          >A</motion.span>
          <motion.span
            variants={childVariant}
          >C</motion.span>
          <motion.span
            variants={childVariant}
          >K</motion.span>
          </motion.span>

        <motion.span
          variants={childVariant}
         className='developer'>
          <motion.span
            variants={childVariant}
          >D</motion.span>
           <motion.span
            variants={childVariant}
          >E</motion.span>
           <motion.span
            variants={childVariant}
          >V</motion.span>
           <motion.span
            variants={childVariant}
          >E</motion.span>
           <motion.span
            variants={childVariant}
          >L</motion.span>
          <motion.span
            variants={childVariant}
          >O</motion.span>
          <motion.span
            variants={childVariant}
          >P</motion.span>
          <motion.span
            variants={childVariant}
          >E</motion.span>
          <motion.span
            variants={childVariant}
          >R</motion.span>
          </motion.span>
      </motion.div>

      <motion.span 
        initial={{scale: 0, opacity: 0, zIndex: -1000}}
        animate={{scale: [1, 1.2, 1], opacity: 1, zIndex: 10}}
        transition={{type: 'spring', stiffness: 100, yoyo: Infinity, duration: 2}}
        className='navigate-text-home'> Click Here </motion.span>

    </motion.div>
  )
}

export default Home