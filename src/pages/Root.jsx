/* eslint-disable no-undef */
import { useEffect } from "react"
// import Header from "../components/Header/Header"
import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import { footerNav } from "../data"
import Logo from "../components/Logo/Logo"


const Root = () => {

    useEffect(() => {

        document.title = "clothes"

    }, [])

    return (
        <>
        
        <div className='container'>

            {/* <Header cartItems={cartItems}/> */}
            <Outlet />
            <footer className="footer">

                <Logo />

                {footerNav.map((nav, index) => (
                    <Footer key={index} {...nav} />
                ))}

            </footer>
            

        </div>

        </>
    )
}

export default Root