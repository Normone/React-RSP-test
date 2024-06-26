import { Text } from "../..";
import './TextBubble.css'
import React, { useContext } from 'react';
import {ThemeContext} from './../../entities';


export const TextBubble = ({ children = '', className = '', ...props }) => {
    const { theme, dispatch } = useContext(ThemeContext);

    return (
        <div className={`textBubble ${theme} ${className}`} {...props}>
            <Text>{children}</Text>
        </div>
    );
};