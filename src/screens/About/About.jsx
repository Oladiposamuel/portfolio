import React, { useRef, useContext, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import Nav from '../../Navigation/Nav';
import './about.css';
import { motion, AnimatePresence } from 'framer-motion';
import { NavContext } from '../../Navigation/context/navContext';
import { ScreenContext } from '../../Navigation/context/screenContext';
import { Link } from 'react-router-dom';

const About = ({}) => {

  const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

  const { screen, setScreen, paginate } = useContext(ScreenContext);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  let isDeskTop = window.matchMedia('(min-width: 1111px)');

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

  let skillsScreen;
  if(screen === 'Skills') {
    skillsScreen = true
  } else if(screen !== 'Skills') {
    skillsScreen = false;
  }

  let contactScreen;
  if(screen === 'Contact') {
    contactScreen = true
  } else if(screen !== 'Contact') {
    contactScreen = false;
  }


  //console.log('About screen is ' + aboutScreen);

  const codeBoxVariant = aboutScreen && {
    enter:{
      zIndex: -1,
      scale: aboutScreen && 0.5,
      opacity: homeScreen && 1,
    },
    center: {
        zIndex: 3,
        x: [0,300],
        scale: aboutScreen ? 0.4 : 1,
        opacity: aboutScreen ? 1 : 1,
        transition: {
          type: 'spring',
          delay: 0,
          duration: 2,
          staggerChildren: 2,
        }
    },
    exit: {
        //zIndex: 10,
        x: 0,
        scale: !aboutScreen && 1,
        transition: {
          duration: .1,
        }
    }
  }

  const variants = {
    enter:{
        zIndex: -1,
        scale: aboutScreen && 1,
        opacity: 1,
        scale: aboutScreen===false && homeScreen===true && 1,
    },
    center: {
        zIndex: 10,
        scale: aboutScreen===true && 1,
        opacity: aboutScreen || homeScreen ? 1 : 0,
        transition: {
          //when: "beforeChildren",
          duration: .5,
          staggerChildren: .1,
        }
    },
    exit: {
        //zIndex: 0,
        x: 0,
        scale: 1,
        transition: {
          duration: 1,
          delay: 0,
        }
    }
  }

  const prevVariants = {
    hidden: {
      opacity: 0,
      zIndex: -100,
    },
    visible: {
      zIndex: 100,
      scale: 1,
      opacity: aboutScreen==true && 1,
    }
  }

  const childVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 0,
      transition: {
        type: 'spring',
        duration: .5,
        staggerChildren: .1,
      }
    }
  }

  const parentCodeVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: aboutScreen ? 1 : 0,
      transition: {
        when: "beforeChildren",
        type: 'spring',
        duration: 1,
        delay: 0,
        staggerChildren: .1,
      }
    }
  }

  const codeScrollVariant = {
    hidden: { 
      y: 0,
    },
    visible: {
      y: -450,
      transition: {
        type: 'spring',
        delay: 28,
        duration: 2,
        staggerChildren: .1,
      }
    }
  }

  const codeTextVariant = {
    hidden: {
      opacity: 0,
      y: 0,
    },
    visible: {
      opacity: aboutScreen ? 1 : 0,
      transition: {
        type: 'spring',
        duration: 1,
        //staggerChildren: .1,
      }
    }
  }

  return (
    <AnimatePresence>
    {<motion.div
      key="About"
      variants= {variants}
      initial="enter"
      whileInView="center"
      exit='exit'
     className={aboutScreen ? 'about-show': 'about'} id='aboutContainer'>

       {homeScreen ? <></> : <Nav />} 

      <AnimatePresence>
        {aboutScreen && <motion.div
          key="about-text"
          initial={ {opacity: 0, scale: 0}}
          animate={ aboutScreen===true && {opacity: 1, x: 0, zIndex: 100, scale: 1} || aboutScreen===false && {opacity: 0, scale: 0}}
          transition={ aboutScreen===true && isDeskTop.matches ? {delay: 1.5} : {delay: .5}}
          className='about-info'>   
          <p  className={aboutScreen ? 'about-text' : ''}>
            My name is Oladipo Samuel. I'm a full stack developer with a penchant for solving problems.
            I have worked with <Link className='about-link' to={{ pathname: "//www.solabtechnologies.com" }} target="_blank">Solab Technologies</Link>, 
            developing web applications (e.g  <Link className='about-link' to={{ pathname: "//www.kiira.io" }} target="_blank">Kiira</Link>) 
            to solve problems facing organisations and communities.
            <p></p>
            <p>View my <Link className='about-link' to={{ pathname: `//www.drive.google.com/file/d/1tBaCXmhZByvVomUhT-9gtdLjInXKwg4x/view` }} target="_blank">Resume</Link></p>
          </p>

          <motion.div
            initial={ {opacity: 1}}
           className={aboutScreen ? '' : 'dark-cover'} />
        </motion.div>}
      </AnimatePresence>

      <AnimatePresence>
        {<motion.div
          key="code-box"
          variants= {codeBoxVariant}
          initial="enter"
          whileInView="center"
          exit='exit'
         className='code-box'>
          <motion.svg
           xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.com/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560"
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
          
          {<motion.div
            initial={{y: -100, opacity: 0}}
            animate={{y:0, opacity: 0}}
            transition={{type: 'spring', mass: 0.5, damping: 7, duration: 2, delay: 0}}
          className='nav-box'>
            <div className='name-box'><h1 className='name-text'>Oladipo Samuel</h1></div>
            <button className='btn'>Contact</button>
          </motion.div>}

          {/* {<motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{type: 'spring', delay: 2.3, duration: 4}}
          className='scroll-down-box'>
            <div
            id = "arrow-down" className='arrow-down'/>
          </motion.div>} */}

          {<motion.div
            variants={prevVariants}
            initial= "hidden"
            animate="visible"
          className={aboutScreen ? 'big-text-box-about' : 'big-text-box'}>
            <motion.span
             className={aboutScreen==true ? 'full-stack': 'full-stack-hide'}>
              <motion.span
              >F</motion.span>
              <motion.span
              >U</motion.span>
              <motion.span
              >L</motion.span>
              <motion.span
              >L</motion.span>
              <motion.span
              >-</motion.span>
              <motion.span
              >S</motion.span>
              <motion.span
              >T</motion.span>
              <motion.span
              >A</motion.span>
              <motion.span
              >C</motion.span>
              <motion.span
              >K</motion.span>
              </motion.span>

            <motion.span
            className={aboutScreen==true ? 'developer': 'developer-hide'}>
              <motion.span
              >D</motion.span>
              <motion.span
              >E</motion.span>
              <motion.span
              >V</motion.span>
              <motion.span
              >E</motion.span>
              <motion.span
              >L</motion.span>
              <motion.span
              >O</motion.span>
              <motion.span
              >P</motion.span>
              <motion.span
              >E</motion.span>
              <motion.span
              >R</motion.span>
              </motion.span>
              </motion.div>}

              { aboutScreen && <motion.div
                variants={parentCodeVariant}
                initial="hidden"
                animate="visible"
                className="code">
                  <motion.div
                    variants={codeScrollVariant}
                  className='code-scroll-box'
                  >

                    <motion.span  variants={codeTextVariant}>f</motion.span>
                    <motion.span  variants={codeTextVariant}>u</motion.span>
                    <motion.span  variants={codeTextVariant}>n</motion.span>
                    <motion.span  variants={codeTextVariant}>c</motion.span>
                    <motion.span  variants={codeTextVariant}>t</motion.span>
                    <motion.span  variants={codeTextVariant}>i</motion.span>
                    <motion.span  variants={codeTextVariant}>o</motion.span>
                    <motion.span  variants={codeTextVariant}>n</motion.span>
                    <motion.span  variants={codeTextVariant}> </motion.span>
                    <motion.span  variants={codeTextVariant}>s</motion.span>
                    <motion.span  variants={codeTextVariant}>o</motion.span>
                    <motion.span  variants={codeTextVariant}>r</motion.span>
                    <motion.span  variants={codeTextVariant}>t</motion.span>
                    <motion.span  variants={codeTextVariant}>{`(`}</motion.span>
                    <motion.span  variants={codeTextVariant}>a</motion.span>
                    <motion.span  variants={codeTextVariant}>r</motion.span>
                    <motion.span  variants={codeTextVariant}>r</motion.span>
                    <motion.span  variants={codeTextVariant}>a</motion.span>
                    <motion.span  variants={codeTextVariant}>y</motion.span>
                    <motion.span  variants={codeTextVariant}>,</motion.span>
                    <motion.span  variants={codeTextVariant}>c</motion.span>
                    <motion.span  variants={codeTextVariant}>o</motion.span>
                    <motion.span  variants={codeTextVariant}>m</motion.span>
                    <motion.span  variants={codeTextVariant}>m</motion.span>
                    <motion.span  variants={codeTextVariant}>a</motion.span>
                    <motion.span  variants={codeTextVariant}>n</motion.span>
                    <motion.span  variants={codeTextVariant}>d</motion.span>
                    <motion.span  variants={codeTextVariant}>{`)`}</motion.span>
                    <motion.span  variants={codeTextVariant}> </motion.span>
                    <motion.span  variants={codeTextVariant}>{`{`}</motion.span>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>f</motion.span>
                      <motion.span  variants={codeTextVariant}>u</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>c</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>o</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>a</motion.span>
                      <motion.span  variants={codeTextVariant}>s</motion.span>
                      <motion.span  variants={codeTextVariant}>c</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>d</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>g</motion.span>
                      <motion.span  variants={codeTextVariant}>S</motion.span>
                      <motion.span  variants={codeTextVariant}>o</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>{`(`}</motion.span>
                      <motion.span  variants={codeTextVariant}>a </motion.span>
                      <motion.span  variants={codeTextVariant}>,</motion.span>
                      <motion.span  variants={codeTextVariant}>b</motion.span>
                      <motion.span  variants={codeTextVariant}>{`)`}</motion.span>
                      <motion.span  variants={codeTextVariant}>{`{`}</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>u</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>a</motion.span>
                      <motion.span  variants={codeTextVariant}>-</motion.span>
                      <motion.span  variants={codeTextVariant}>b</motion.span>
                      <motion.span  variants={codeTextVariant}>;</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>{`}`}</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>f</motion.span>
                      <motion.span  variants={codeTextVariant}>u</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>c</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>o</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>d</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>s</motion.span>
                      <motion.span  variants={codeTextVariant}>c</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>d</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>g</motion.span>
                      <motion.span  variants={codeTextVariant}>S</motion.span>
                      <motion.span  variants={codeTextVariant}>o</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>{`(`}</motion.span>
                      <motion.span  variants={codeTextVariant}>a </motion.span>
                      <motion.span  variants={codeTextVariant}>,</motion.span>
                      <motion.span  variants={codeTextVariant}>b</motion.span>
                      <motion.span  variants={codeTextVariant}>{`)`}</motion.span>
                      <motion.span  variants={codeTextVariant}>{`{`}</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>u</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>b</motion.span>
                      <motion.span  variants={codeTextVariant}>-</motion.span>
                      <motion.span  variants={codeTextVariant}>a</motion.span>
                      <motion.span  variants={codeTextVariant}>;</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>{`}`}</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>l</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>S</motion.span>
                      <motion.span  variants={codeTextVariant}>o</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>g</motion.span>
                      <motion.span  variants={codeTextVariant}>C</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>a</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}> = </motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>{`{`}</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>a</motion.span>
                      <motion.span  variants={codeTextVariant}>s</motion.span>
                      <motion.span  variants={codeTextVariant}>c</motion.span>
                      <motion.span  variants={codeTextVariant}>:</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>a</motion.span>
                      <motion.span  variants={codeTextVariant}>s</motion.span>
                      <motion.span  variants={codeTextVariant}>c</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>d</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>g</motion.span>
                      <motion.span  variants={codeTextVariant}>S</motion.span>
                      <motion.span  variants={codeTextVariant}>o</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>,</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>d</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>s</motion.span>
                      <motion.span  variants={codeTextVariant}>c</motion.span>
                      <motion.span  variants={codeTextVariant}>:</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>d</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>s</motion.span>
                      <motion.span  variants={codeTextVariant}>c</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>d</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>g</motion.span>
                      <motion.span  variants={codeTextVariant}>S</motion.span>
                      <motion.span  variants={codeTextVariant}>o</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>{`}`}</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>u</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>a</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>a</motion.span>
                      <motion.span  variants={codeTextVariant}>y</motion.span>
                      <motion.span  variants={codeTextVariant}>.</motion.span>
                      <motion.span  variants={codeTextVariant}>s</motion.span>
                      <motion.span  variants={codeTextVariant}>o</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>(</motion.span>
                      <motion.span  variants={codeTextVariant}>s</motion.span>
                      <motion.span  variants={codeTextVariant}>o</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>g</motion.span>
                      <motion.span  variants={codeTextVariant}>C</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>a</motion.span>
                      <motion.span  variants={codeTextVariant}>[</motion.span>
                      <motion.span  variants={codeTextVariant}>c</motion.span>
                      <motion.span  variants={codeTextVariant}>o</motion.span>
                      <motion.span  variants={codeTextVariant}>m</motion.span>
                      <motion.span  variants={codeTextVariant}>m</motion.span>
                      <motion.span  variants={codeTextVariant}>a</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>d</motion.span>
                      <motion.span  variants={codeTextVariant}>]</motion.span>
                      <motion.span  variants={codeTextVariant}>)</motion.span>
                      <motion.span  variants={codeTextVariant}>;</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>v</motion.span>
                      <motion.span  variants={codeTextVariant}>a</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>h</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>p</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>=</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>q</motion.span>
                      <motion.span  variants={codeTextVariant}>u</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>(</motion.span>
                      <motion.span  variants={codeTextVariant}>'</motion.span>
                      <motion.span  variants={codeTextVariant}>h</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>p</motion.span>
                      <motion.span  variants={codeTextVariant}>'</motion.span>
                      <motion.span  variants={codeTextVariant}>)</motion.span>
                      <motion.span  variants={codeTextVariant}>;</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>h</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>p</motion.span>
                      <motion.span  variants={codeTextVariant}>.</motion.span>
                      <motion.span  variants={codeTextVariant}>c</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>a</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>S</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>v</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>(</motion.span>
                      <motion.span  variants={codeTextVariant}>f</motion.span>
                      <motion.span  variants={codeTextVariant}>u</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>c</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>o</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>(</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>q</motion.span>
                      <motion.span  variants={codeTextVariant}>,</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>s</motion.span>
                      <motion.span  variants={codeTextVariant}>)</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>{`{`}</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>s</motion.span>
                      <motion.span  variants={codeTextVariant}>.</motion.span>
                      <motion.span  variants={codeTextVariant}>w</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>(</motion.span>
                      <motion.span  variants={codeTextVariant}>'</motion.span>
                      <motion.span  variants={codeTextVariant}>H</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>l</motion.span>
                      <motion.span  variants={codeTextVariant}>l</motion.span>
                      <motion.span  variants={codeTextVariant}>o</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>W</motion.span>
                      <motion.span  variants={codeTextVariant}>o</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>l</motion.span>
                      <motion.span  variants={codeTextVariant}>d</motion.span>
                      <motion.span  variants={codeTextVariant}>!</motion.span>
                      <motion.span  variants={codeTextVariant}>'</motion.span>
                      <motion.span  variants={codeTextVariant}>)</motion.span>
                      <motion.span  variants={codeTextVariant}>;</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>s</motion.span>
                      <motion.span  variants={codeTextVariant}>.</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>d</motion.span>
                      <motion.span  variants={codeTextVariant}>(</motion.span>
                      <motion.span  variants={codeTextVariant}>)</motion.span>
                      <motion.span  variants={codeTextVariant}>;</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>{`}`}</motion.span>
                      <motion.span  variants={codeTextVariant}>)</motion.span>
                      <motion.span  variants={codeTextVariant}>.</motion.span>
                      <motion.span  variants={codeTextVariant}>l</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>s</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>(</motion.span>
                      <motion.span  variants={codeTextVariant}>8</motion.span>
                      <motion.span  variants={codeTextVariant}>0</motion.span>
                      <motion.span  variants={codeTextVariant}>8</motion.span>
                      <motion.span  variants={codeTextVariant}>0</motion.span>
                      <motion.span  variants={codeTextVariant}>)</motion.span>
                      <motion.span  variants={codeTextVariant}>;</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>f</motion.span>
                      <motion.span  variants={codeTextVariant}>u</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>c</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>o</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>a</motion.span>
                      <motion.span  variants={codeTextVariant}>s</motion.span>
                      <motion.span  variants={codeTextVariant}>c</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>d</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>g</motion.span>
                      <motion.span  variants={codeTextVariant}>S</motion.span>
                      <motion.span  variants={codeTextVariant}>o</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>{`(`}</motion.span>
                      <motion.span  variants={codeTextVariant}>a </motion.span>
                      <motion.span  variants={codeTextVariant}>,</motion.span>
                      <motion.span  variants={codeTextVariant}>b</motion.span>
                      <motion.span  variants={codeTextVariant}>{`)`}</motion.span>
                      <motion.span  variants={codeTextVariant}>{`{`}</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>u</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>a</motion.span>
                      <motion.span  variants={codeTextVariant}>-</motion.span>
                      <motion.span  variants={codeTextVariant}>b</motion.span>
                      <motion.span  variants={codeTextVariant}>;</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>{`}`}</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>f</motion.span>
                      <motion.span  variants={codeTextVariant}>u</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>c</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>o</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>d</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>s</motion.span>
                      <motion.span  variants={codeTextVariant}>c</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>d</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>g</motion.span>
                      <motion.span  variants={codeTextVariant}>S</motion.span>
                      <motion.span  variants={codeTextVariant}>o</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>{`(`}</motion.span>
                      <motion.span  variants={codeTextVariant}>a </motion.span>
                      <motion.span  variants={codeTextVariant}>,</motion.span>
                      <motion.span  variants={codeTextVariant}>b</motion.span>
                      <motion.span  variants={codeTextVariant}>{`)`}</motion.span>
                      <motion.span  variants={codeTextVariant}>{`{`}</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>u</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>b</motion.span>
                      <motion.span  variants={codeTextVariant}>-</motion.span>
                      <motion.span  variants={codeTextVariant}>a</motion.span>
                      <motion.span  variants={codeTextVariant}>;</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>{`}`}</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>l</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>S</motion.span>
                      <motion.span  variants={codeTextVariant}>o</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>g</motion.span>
                      <motion.span  variants={codeTextVariant}>C</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>a</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}> = </motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>{`{`}</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>a</motion.span>
                      <motion.span  variants={codeTextVariant}>s</motion.span>
                      <motion.span  variants={codeTextVariant}>c</motion.span>
                      <motion.span  variants={codeTextVariant}>:</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>a</motion.span>
                      <motion.span  variants={codeTextVariant}>s</motion.span>
                      <motion.span  variants={codeTextVariant}>c</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>d</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>g</motion.span>
                      <motion.span  variants={codeTextVariant}>S</motion.span>
                      <motion.span  variants={codeTextVariant}>o</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>,</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>d</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>s</motion.span>
                      <motion.span  variants={codeTextVariant}>c</motion.span>
                      <motion.span  variants={codeTextVariant}>:</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>d</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>s</motion.span>
                      <motion.span  variants={codeTextVariant}>c</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>d</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>g</motion.span>
                      <motion.span  variants={codeTextVariant}>S</motion.span>
                      <motion.span  variants={codeTextVariant}>o</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>{`}`}</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>u</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>a</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>a</motion.span>
                      <motion.span  variants={codeTextVariant}>y</motion.span>
                      <motion.span  variants={codeTextVariant}>.</motion.span>
                      <motion.span  variants={codeTextVariant}>s</motion.span>
                      <motion.span  variants={codeTextVariant}>o</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>(</motion.span>
                      <motion.span  variants={codeTextVariant}>s</motion.span>
                      <motion.span  variants={codeTextVariant}>o</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>g</motion.span>
                      <motion.span  variants={codeTextVariant}>C</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>a</motion.span>
                      <motion.span  variants={codeTextVariant}>[</motion.span>
                      <motion.span  variants={codeTextVariant}>c</motion.span>
                      <motion.span  variants={codeTextVariant}>o</motion.span>
                      <motion.span  variants={codeTextVariant}>m</motion.span>
                      <motion.span  variants={codeTextVariant}>m</motion.span>
                      <motion.span  variants={codeTextVariant}>a</motion.span>
                      <motion.span  variants={codeTextVariant}>n</motion.span>
                      <motion.span  variants={codeTextVariant}>d</motion.span>
                      <motion.span  variants={codeTextVariant}>]</motion.span>
                      <motion.span  variants={codeTextVariant}>)</motion.span>
                      <motion.span  variants={codeTextVariant}>;</motion.span>
                    </motion.div>

                    <motion.div
                      //variants={parentCodeVariant}
                      className="code-line"
                    >
                      <motion.span  variants={codeTextVariant}>v</motion.span>
                      <motion.span  variants={codeTextVariant}>a</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>h</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>p</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>=</motion.span>
                      <motion.span  variants={codeTextVariant}> </motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>q</motion.span>
                      <motion.span  variants={codeTextVariant}>u</motion.span>
                      <motion.span  variants={codeTextVariant}>i</motion.span>
                      <motion.span  variants={codeTextVariant}>r</motion.span>
                      <motion.span  variants={codeTextVariant}>e</motion.span>
                      <motion.span  variants={codeTextVariant}>(</motion.span>
                      <motion.span  variants={codeTextVariant}>'</motion.span>
                      <motion.span  variants={codeTextVariant}>h</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>t</motion.span>
                      <motion.span  variants={codeTextVariant}>p</motion.span>
                      <motion.span  variants={codeTextVariant}>'</motion.span>
                      <motion.span  variants={codeTextVariant}>)</motion.span>
                      <motion.span  variants={codeTextVariant}>.</motion.span>
                      <motion.span  variants={codeTextVariant}>.</motion.span>
                      <motion.span  variants={codeTextVariant}>.</motion.span>
                      <motion.span  variants={codeTextVariant}>.</motion.span>
                      <motion.span  variants={codeTextVariant}>.</motion.span>
                    </motion.div>

                  <motion.div
                    //variants={codeTextVariant}
                    initial="hidden"
                    animate="visible"
                    className={aboutScreen ? '' : 'dark-cover'} 
                  />
                  </motion.div>
                </motion.div>}
              </motion.div> }

        <motion.div
        className={aboutScreen ? '' : ''} />
      </AnimatePresence>

    </motion.div>}
    </AnimatePresence>
  )
}

export default About