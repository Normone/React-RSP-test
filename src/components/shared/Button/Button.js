import React, { useContext } from 'react';
import {ThemeContext} from './../../entities';
import './Button.css'

export const Button = ({ children = '', onClick = null, className = '', ...props }) => {
    const { theme, dispatch } = useContext(ThemeContext);
    
    return (
        <button className={`button ${theme} ${className}`} onClick={onClick} {...props}>
            {children}
        </button>
    );
};