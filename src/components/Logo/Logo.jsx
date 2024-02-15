import { NavLink } from 'react-router-dom'
import logo from '../../../public/logo/logo.svg'

export default function Logo() {
    return (
        <>
        
        <NavLink to="/">
            <div className="logo">
                <img src={logo} alt="logo" />
                <p>clothes</p>
            </div>
        </NavLink>
        
        </>
    )
}