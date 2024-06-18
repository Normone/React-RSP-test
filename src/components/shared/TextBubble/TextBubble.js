import { Text } from "../..";
import './TextBubble.css'


export const TextBubble = ({ children = '', className = '', ...props }) => {


    return (
        <div className={`textBubble ${className}`} {...props}>
            <Text>{children}</Text>
        </div>
    );
};