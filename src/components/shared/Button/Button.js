

export const Button = ({ children = '', onClick = null, className = '', ...props }) => {
    return (
        <button className={`button ${className}`} onClick={onClick} {...props}>
            {children}
        </button>
    );
};