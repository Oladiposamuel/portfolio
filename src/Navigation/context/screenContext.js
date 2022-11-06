import React, { createContext, useContext, useState, useEffect } from "react";

export const ScreenContext = createContext();

export const ScreenProvider = ({children}) => {
    const [screen, setScreen] = useState('Home');

    const paginate = (currentScreen) => {
        setScreen(currentScreen);
    };

    const providerValue = {
        screen,
        setScreen,
        paginate
    };

    return (
		<ScreenContext.Provider value={providerValue}>{children}</ScreenContext.Provider>
	);
}

