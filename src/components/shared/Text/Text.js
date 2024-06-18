

export const Text = ({ children = '', onClick = null, className = '', href = '', ...props }) => {

    let r;

    if (href.length > 0) {
        r = <a href={href} className={`a ${className}`} onClick={onClick} {...props}>
        {children}
    </a>
    } else {
        r = <p className={`p ${className}`} onClick={onClick} {...props}>
        {children}
    </p>
    }

    return (
        <>
            {r}
        </>
    );
};