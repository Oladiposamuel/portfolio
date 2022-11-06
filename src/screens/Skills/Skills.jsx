import React, { useState, useEffect, useContext } from 'react';
import './skills.css';
import { NavContext } from '../../Navigation/context/navContext';
import { ScreenContext } from '../../Navigation/context/screenContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Nav from '../../Navigation/Nav';

const Skills = () => {

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
    <div className={skillsScreen ? 'skills' : 'skills-hide'} id='skillsContainer'> 
          <motion.div
            initial={{opacity: 1}}
            animate={{opacity: skillsScreen && 1, zIndex: skillsScreen && 100}}
            transition= {{duration: 5}}
          >
           {homeScreen ? <></> : <Nav />} 
          </motion.div>

          {skillsScreen && <motion.div
            initial={{y: 0}}
            animate={{y: 1100}}
            transition={{type: 'spring', duration: 2}}
           className='contact-box'>

          </motion.div>}

          {skillsScreen && <div className='circles-box'>
            
            <div className='box-1'>
              <motion.div 
                initial={{scale: 0}}
                animate={skillsScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1, delay: .3, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>JavaScript</span>
              </motion.div>

              <motion.div 
                initial={{scale: 0}}
                animate={skillsScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1, delay: 1, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>TypeScript</span>
              </motion.div>

              <motion.div   
                initial={{scale: 0}}
                animate={skillsScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1, delay: 1.5, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>NodeJs</span>
              </motion.div>

              <motion.div 
                initial={{scale: 0}}
                animate={skillsScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1, delay: 2, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>ReactJs</span>
              </motion.div>
            </div>


            <div className='box-1'>
              <motion.div 
                initial={{scale: 0}}
                animate={skillsScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1.5, delay: 2, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>MongoDB</span>
              </motion.div>

              <motion.div 
                initial={{scale: 0}}
                animate={skillsScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1.5, delay: 1.5, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>Git</span>
              </motion.div>

              <motion.div 
                initial={{scale: 0}}
                animate={skillsScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1.5, delay: 1, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>MySQL</span>
              </motion.div>

              <motion.div 
                initial={{scale: 0}}
                animate={skillsScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1.5, delay: .3, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>Webflow</span>
              </motion.div>
            </div>


            <div className='box-1'>
              <motion.div 
                initial={{scale: 0}}
                animate={skillsScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1, delay: .3, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>HTML5</span>
              </motion.div>

              <motion.div 
                initial={{scale: 0}}
                animate={skillsScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1, delay: 1, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>CSS3</span>
              </motion.div>

              <motion.div 
                initial={{scale: 0}}
                animate={skillsScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1, delay: 1.5, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>SASS</span>
              </motion.div>

              <motion.div 
                initial={{scale: 0}}
                animate={skillsScreen==true && {scale: [1, 1.2]}}
                transition={{type: 'spring', duration: 1, delay: 2, yoyo: Infinity}}
              className='ball'>
                <span className='ball-text'>Responsive Design</span>
              </motion.div>
            </div>

          </div>}

    </div>
  )
}

export default Skills