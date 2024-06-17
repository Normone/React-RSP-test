// import {useState} from 'react'
import { Text } from "../Text/Text";
import './ProgressBar.css';

export const ProgressBar = ({ children = '', className = '', color = '#898989', 
    maxVal = 100, curVal = 25, ...props }) => {

    return (
        <div className={`progressBar ${className}`} {...props}>
            <div className={`progressLine `}
            style={{
                width: Math.floor(((curVal / maxVal) * 100)) + '%',
                backgroundColor: color,

            }}
            />
            <Text className="progressName">{children}</Text>
        </div>
    );
};