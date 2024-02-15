import '/Button.css'

// eslint-disable-next-line react/prop-types
export default function Button({ children, backgroundColor, color }) {

    const buttonStyle = {
        backgroundColor: backgroundColor,
        color: color,
    };

    return(
        
            <button style={buttonStyle} className="button">{children}</button>
        
    )
}