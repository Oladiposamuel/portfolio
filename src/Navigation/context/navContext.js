import React, { useState } from 'react';

export const NavContext = React.createContext();

export const NavProvider = ({ children }) => {
	const [activeNavLinkId, setActiveNavLinkId] = useState('Home');

	const providerValue = {
		activeNavLinkId,
		setActiveNavLinkId,
	};

	return (
		<NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
	);
};