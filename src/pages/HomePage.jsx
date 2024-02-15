import { NavLink } from "react-router-dom"
import Banner from "../components/Banner/Banner"
import Button from "../components/Button/Button"
import Card from "../components/Card/Card"
import Partner from "../components/Partner/Partner"
import Slider from "../components/Slider/Slider"
import Emailchimp from "../components/Subscription/Emailchimp"
import { partners, products } from "../data"

export default function HomePage() {
    return (
        <>
        <main>

            <Banner />

            <h2>Каталог</h2>

            <div className="cards">

                <Card {...products[0]} />
                <Card {...products[1]} />
                <Card {...products[2]} />

            </div>

            <div className="button-wrapper">
            <NavLink to="/catalog"><Button>Каталог</Button></NavLink>
            </div>

            <h2>Популярные товары</h2>

            <section id="populars">

                <div className="populars">

                <Slider />

                </div>

            </section>

            <h2>Наши партнёры</h2>

            <div className="partners">

            {partners.map((partner, index) => (
                <Partner key={index} {...partner} />
            ))}

            </div>

            <div className="subscriptions">  

                <Emailchimp />

            </div>

        </main>
        </>
    )
}