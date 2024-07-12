import React, { useReducer } from 'react';
import {ThemeContext, themeReducer} from './';

export const ThemeProvider = ({ children }) => {
    const [theme, dispatch] = useReducer(themeReducer, 'dark');

    return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
        {children}
    </ThemeContext.Provider>
    );
};


