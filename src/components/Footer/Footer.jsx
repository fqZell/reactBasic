import '/Footer.css'

// eslint-disable-next-line react/prop-types
export default function Footer({ title, subtitle, subtitle2, subtitle3 }) {
    return (
        <>

        <ul className="footer-nav">
            <li>
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <p>{subtitle2}</p>
                <p>{subtitle3}</p>
            </li>
        </ul>
        
        </>
    )
}