import React, { useState, useEffect, useContext } from 'react';
import Nav from '../../Navigation/Nav';
import './contact.css';
import '../Skills/skills.css';
import { ScreenContext } from '../../Navigation/context/screenContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Contact = () => {

  const { screen, setScreen, paginate } = useContext(ScreenContext);

  let skillsScreen;
    if(screen === 'Skills') {
      skillsScreen = true
    } else if(screen !== 'Skills') {
      skillsScreen = false;
    }

    //console.log(skillsScreen);

    let aboutScreen;
    if(screen === 'About') {
      aboutScreen = true
    } else if(screen !== 'About') {
      aboutScreen = false;
    }

    let contactScreen;
    if(screen === 'Contact') {
      contactScreen = true
    } else if(screen !== 'Contact') {
      contactScreen = false;
    }

    let homeScreen;
    if(screen === 'Home') {
      homeScreen = true
    } else if(screen !== 'Home') {
      homeScreen = false;
    }

  return (
    <div className={contactScreen ? 'contact' : ''} id='contactContainer'>

      {<Nav />}        
        
      {contactScreen && <motion.div 
          initial={{scale: 1}}
          animate={{scale: 0}}
          transition={{duration: 2}}
        className='circles-box'>
            
            <div className='box-1'>
              <motion.div 
                initial={{scale: 0}}
                animate={contactScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1, delay: 0, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>JavaScript</span>
              </motion.div>

              <motion.div 
                initial={{scale: 0}}
                animate={contactScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1, delay: 1, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>TypeScript</span>
              </motion.div>

              <motion.div   
                initial={{scale: 0}}
                animate={contactScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1, delay: 1.5, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>NodeJs</span>
              </motion.div>

              <motion.div 
                initial={{scale: 0}}
                animate={contactScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1, delay: 2, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>ReactJs</span>
              </motion.div>
            </div>


            <div className='box-1'>
              <motion.div 
                initial={{scale: 0}}
                animate={contactScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1.5, delay: 2, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>MongoDB</span>
              </motion.div>

              <motion.div 
                initial={{scale: 0}}
                animate={contactScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1.5, delay: 1.5, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>Git</span>
              </motion.div>

              <motion.div 
                initial={{scale: 0}}
                animate={contactScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1.5, delay: 1, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>MySQL</span>
              </motion.div>

              <motion.div 
                initial={{scale: 0}}
                animate={contactScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1.5, delay: 0, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>Webflow</span>
              </motion.div>
            </div>


            <div className='box-1'>
              <motion.div 
                initial={{scale: 0}}
                animate={contactScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1, delay: 0, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>HTML5</span>
              </motion.div>

              <motion.div 
                initial={{scale: 0}}
                animate={contactScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1, delay: 1, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>CSS3</span>
              </motion.div>

              <motion.div 
                initial={{scale: 0}}
                animate={contactScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1, delay: 1.5, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>SASS</span>
              </motion.div>

              <motion.div 
                initial={{scale: 0}}
                animate={contactScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1, delay: 2, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>Responsive Design</span>
              </motion.div>
            </div>

          </motion.div>}

          {contactScreen && <motion.div
            initial={{y: 1000}}
            animate={{y: 0}}
            transition={{type: 'tween', duration: 2}}
           className='contact-box'>

            <span className='small-text'>CONTACT ME</span>
            <span className='text'>Oladiposamuel.ola@gmail.com</span>

            <Link to={{ pathname: "//www.github.com/Oladiposamuel" }} target="_blank"> <button  className='btn'>Github</button> </Link>

          </motion.div>}

    </div>
  )
}

export default Contact