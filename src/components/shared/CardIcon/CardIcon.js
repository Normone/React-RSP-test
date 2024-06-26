import React, { useContext } from 'react';
import {ThemeContext} from './../../entities';
import './CardIcon.css'

export const CardIcon = ({ onClick = null, className = '', type = 'default', ...props }) => {

    const { theme, dispatch } = useContext(ThemeContext);

    return (
        <img src={`./cardIcons/${type}.svg`} 
            alt={type}
            className={`cardIcon ${theme} ${className}`} 
            onClick={onClick} 
            {...props}/>
    );
};