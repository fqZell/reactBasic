// import Button from "../Button/Button"
import photo from '../../../public/product/product.jpg'
import favoritesCard from '../../../public/icons/favoritesCard.svg'
import './Card.css'
import { NavLink } from "react-router-dom"
// eslint-disable-next-line react/prop-types
export default function Card({ id, title, price, addToCart }) {
    return (
        <>
        
                <div className="card">

                    <img src={photo} alt="card" />

                    <NavLink to={`/catalog/${id}`}><div className="card-title">{title}</div></NavLink>

                    <div className="card-price">{price}</div>

                    <button onClick={() => addToCart(id)}>В корзину</button>
                    {/* <Button>
                        В корзину!
                    </Button> */}

                    <div className="card-favorites">
                        <img src={favoritesCard} alt="favoritesCard" />
                    </div>

                </div>

        </>
    )
}