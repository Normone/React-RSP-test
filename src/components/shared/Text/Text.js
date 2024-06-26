import React, { useContext } from 'react';
import {ThemeContext} from './../../entities';
import './Text.css'

export const Text = ({ children = '', onClick = null, className = '', href = '', ...props }) => {
    const { theme, dispatch } = useContext(ThemeContext);

    let r;

    if (href.length > 0) {
        r = <a href={href} className={`text a ${theme} ${className}`} onClick={onClick} {...props}>
        {children}
    </a>
    } else {
        r = <p className={`text p ${theme} ${className}`} onClick={onClick} {...props}>
        {children}
    </p>
    }

    return (
        <>
            {r}
        </>
    );
};