import Button from "../Button/Button"
import photo from '../../../public/product/product.jpg'
import favoritesCard from '../../../public/icons/favoritesCard.svg'
import './Card.css'
import { NavLink } from "react-router-dom"
// eslint-disable-next-line react/prop-types
export default function Card({ id, title, price }) {
    return (
        <>
        
            <NavLink to={`/catalog/${id}`}>
                <div className="card">

                    <img src={photo} alt="card" />

                    <div className="card-title">{title}</div>

                    <div className="card-price">{price}</div>

                    <Button>
                        В корзину!
                    </Button>

                    <div className="card-favorites">
                        <img src={favoritesCard} alt="favoritesCard" />
                    </div>

                </div>
            </NavLink>
        
        </>
    )
}