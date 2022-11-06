import React, { useContext, useState, useEffect } from 'react';
import { NavContext } from './context/navContext';
import { ScreenContext } from './context/screenContext';
import './Nav.css';
import { useKeyPress } from './customHooks/useKeyPress';

const NavLink = ({ navLinkId, scrollToId, navLinks, navLinkNo }) => {

    // const [screen, setScreen] = useState();

    // const paginate = (currentScreen) => {
    //   setScreen(currentScreen);
    // };

    const downPress = useKeyPress("ArrowDown");
	const upPress = useKeyPress("ArrowUp");

	useEffect(() => {
        navLinks.map((navLink, index) => {
            let newIndex;  
            if(activeNavLinkId !== 'Contact') {

                if(navLink.navLinkId == activeNavLinkId && downPress) {
                    newIndex = index + 1;

                    setTimeout(() => {
                        const newActiveLinkId = navLinks[newIndex].navLinkId;
                        //console.log(newActiveLinkId);
                        const newScrollToId = navLinks[newIndex].scrollToId;
                        //console.log(newScrollToId);
                        setActiveNavLinkId(newActiveLinkId);
                        //setActiveScreen(newActiveLinkId);
                        paginate(newActiveLinkId);
                        document.getElementById(newScrollToId).scrollIntoView({ behavior: 'auto' });
                    }, 500)
                }
            }
        })
	}, [downPress])

    useEffect(() => {
        navLinks.map((navLink, index) => {
            let newIndex;  
            if(activeNavLinkId !== 'Home') {

                if(navLink.navLinkId == activeNavLinkId && upPress) {
                    newIndex = index - 1;
    
                    setTimeout(() => {
                        const newActiveLinkId = navLinks[newIndex].navLinkId;
                        const newScrollToId = navLinks[newIndex].scrollToId;
                        setActiveNavLinkId(newActiveLinkId);
                        //setActiveScreen(newActiveLinkId);
                        paginate(newActiveLinkId);
                        document.getElementById(newScrollToId).scrollIntoView({ behavior: 'auto' });
                    }, 500)
                }
            }
        })
    }, [upPress])

	const { activeNavLinkId, setActiveNavLinkId } = useContext(NavContext);

    const { screen, setScreen, paginate } = useContext(ScreenContext);

	const handleClick = () => {
		setActiveNavLinkId(navLinkId);
        paginate(navLinkId);
		document.getElementById(scrollToId).scrollIntoView({ behavior: 'auto' });
	};

    // console.log(activeNavLinkId);
    // console.log(navLinkId);

	return (
        <span className={activeNavLinkId === navLinkId ? 'nav-item-box' : 'nav-item-box'}>
            <span className={activeNavLinkId === navLinkId && activeNavLinkId ==navLinks[navLinks.length-1].navLinkId ? 'activeClass last-line': ''}></span>
            <span
                id={navLinkId}
                className={activeNavLinkId === navLinkId ? 'activeClass' : 'non-activeClass'}
                onClick={handleClick}
            >
                <span className='nav-num'>{navLinkNo}</span>
            </span>
            {activeNavLinkId !== navLinks[navLinks.length-1].navLinkId && <span className={activeNavLinkId === navLinkId && activeNavLinkId !==navLinks[navLinks.length-1].navLinkId ? 'activeClass line' : 'noline'}> </span>}
        </span>
	);
};

export default NavLink;