

export const CardIcon = ({ onClick = null, className = '', type = 'default', ...props }) => {

    

    return (
        <img src={`./cardIcons/${type}.svg`} 
            alt={type}
            className={`cardIcon ${className}`} 
            onClick={onClick} 
            {...props}/>
    );
};