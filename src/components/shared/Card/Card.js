import React, { useContext } from 'react';
import { CardIcon, Text, Button } from "../..";
import {ThemeContext} from './../../entities';
import './Card.css'


export const Card = ({ onClick = null, playable = false, className = '', type = 'default', ...props }) => {
    const { theme, dispatch } = useContext(ThemeContext);

    let text;
    switch (type) {
        case 'r':
            text = 'Камень'
            break;
        case 's':
            text = 'Ножницы'
            break;
        case 'p':
            text = 'Бумага'
        break;

        default:
            text = '?'
            break;
    }    

    return (
        <div className={`card ${theme} ${className}`} onClick={onClick} {...props}>
            <CardIcon type={type}></CardIcon>
            <Text>{text}</Text>
            {playable !== false &&
            <Button onClick={()=> {playable(type)}}>Использовать</Button> // onClick={somePropsFunction(type)}
            }
        </div>
    );
};