import { useEffect } from "react"
import Header from "../components/Header/Header"
import { Outlet } from "react-router-dom"
// import Footer from "../components/Footer/Footer"

const Root = () => {

    useEffect(() => {

        document.title = "clothes"

    }, [])

    return (
        <>
        
        <div className='container'>

            <Header />
            <Outlet />
            {/* <Footer /> */}
            
        </div>

        </>
    )
}

export default Root