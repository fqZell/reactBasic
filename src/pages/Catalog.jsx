import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Filter from "../components/Filter/Filter";
import { products } from "../data";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import search from "../../public/icons/search.svg"

export default function Catalog() {

    const [query, setQuery] = useState("")
    const onChangeQuery = (event) => {
        setQuery(event.target.value);
    }

    const filterdProducts = products.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()))

    return (
        <>
            <h1>Каталог</h1>

            <div className="filtered">

                <Filter />

                <div className="search">
                    <label htmlFor="search"></label>
                    <input
                    value={query} type="text" name="search" placeholder="Поиск"
                    onChange={(e) => onChangeQuery(e)}
                    
                    />
                    <img src={search} alt="search" />
                </div>
                
            </div>

            <div className="cards">
                {
                    // eslint-disable-next-line no-undef
                    filterdProducts.length ?
                    // eslint-disable-next-line no-undef
                    filterdProducts.map((product, index) => {
                        return (
                            <Card key={index} {...product} />
                        )
                    })

                    :

                    // eslint-disable-next-line no-undef
                    <h2>По вашему запросу `{query}` ничего не найдено!</h2>
                }
            </div>

            <div className="catalog-button">
                <Button>
                    Показать еще
                </Button>
            </div>

            <Footer />
        </>
    )
}