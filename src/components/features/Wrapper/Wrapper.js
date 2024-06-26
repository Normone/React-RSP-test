import React, { useContext } from 'react';
import {ThemeContext} from '../../entities';
import './Wrapper.css'

export const Wrapper = ({ children }) => {
    
    const { theme, dispatch } = useContext(ThemeContext);

    return (
        <div className={`wrapper ${theme}`}>
            {children}
        </div>
    );
};
