import './Banner.css'
import bannerPhoto from '../../../public/banner/banner.jpg'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'

export default function Banner() {
    return (
        <>
        
            <div className="banner">

                <img src={bannerPhoto} alt="" className='banner-photo'/>
            
                <div className="banner-content">

                    <h1 className="title">Онлайн-магазин</h1>
                    <p className="description">*лучший по продажам среди конкурентов</p>

                    <NavLink to="/catalog"><Button>Каталог</Button></NavLink>


                </div>

            </div>
        
        </>
    )
}