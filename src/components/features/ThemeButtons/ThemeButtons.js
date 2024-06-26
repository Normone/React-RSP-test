import React, { useContext } from 'react';
import { ThemeContext } from './../../entities';
import { Button } from '../../../components'; 
import './ThemeButtons.css'


export const ThemeButtons = ({ className = '', ...props }) => {
    const { theme, dispatch } = useContext(ThemeContext);
    
    return (
        <div className={`themeButton ${className}`} {...props}>
            <Button onClick={()=>{dispatch({type: 'toggle'})}} >
                {`${theme === 'light' ? 'Тёмная' : 'Светлая'} тема`}
            </Button>

        </div>
    );
};