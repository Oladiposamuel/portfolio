import React, {useState, useEffect, useContext} from 'react';
import './Nav.css';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import { ScreenContext } from './context/screenContext';
import { motion } from 'framer-motion';

const Nav = () => {

	const { screen, setScreen, paginate } = useContext(ScreenContext);

  const [isDesk, setIsDesk] = useState(false);

  const widthOutput = document.querySelector('#width');

  let isDeskTop = window.matchMedia('(min-width: 768px)');

  const screenTest = (e) => {
    if(e.matches) {
      setIsDesk(true);
    } else {
      setIsDesk(false);
    }
  }

  isDeskTop.addEventListener('change', screenTest);

  useEffect(() => {

  }, [isDeskTop.matches])

	let homeScreen;
	if(screen === 'Home') {
	  homeScreen = true
	} else if(screen !== 'Home') {
	  homeScreen = false;
	}

	let aboutScreen;
  if(screen === 'About') {
    aboutScreen = true
  } else if(screen !== 'About') {
    aboutScreen = false;
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

	return (
	    <nav className={homeScreen || aboutScreen || skillsScreen || contactScreen ? 'nav' : 'nav-hide' }>
        {homeScreen && isDeskTop.matches && <motion.span 
        initial={{scale: 0}}
        animate={{scale: [1, 1.5]}}
        transition={{type: 'spring',yoyo: Infinity, duration: 1}}
        className={'navigate-text'}> Click Here </motion.span>}

	      {navLinks.map(
		    ({navLinkId, scrollToId, navLinkNo}, idx) =>
            <NavLink 
				key={idx}
                navLinkId={navLinkId} 
                scrollToId={scrollToId} 
                navLinkNo= {navLinkNo}
				        navLinks = {navLinks}
            />
	      )}
	    </nav>
	  )
};

export default Nav;