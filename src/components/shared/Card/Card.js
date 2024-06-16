import { CardIcon, Text, Button } from "../..";
import './Card.css'


export const Card = ({ onClick = null, playable = false, className = '', type = 'default', ...props }) => {

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
        <div className={`card ${className}`} onClick={onClick} {...props}>
            <CardIcon type={type}></CardIcon>
            <Text>{text}</Text>
            {playable !== false &&
            <Button onClick={()=> {playable(type)}}>Использовать</Button> // onClick={somePropsFunction(type)}
            }
        </div>
    );
};