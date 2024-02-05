import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
// import Filter from "../components/Filter/Filter";
import { products } from "../data";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import Filter from "../components/Filter/Filter";
import Search from "../components/Search/Search";

// eslint-disable-next-line react/prop-types
export default function Catalog() {

    const [sorting, setSorting] = useState('popular');

    const handleSortingChange = (event) => {
      setSorting(event.target.value);
    };

    const [query, setQuery] = useState("")
    const onChangeQuery = (event) => {
        setQuery(event.target.value);
    }

    const filterdProducts = products.filter((item) => 
        item.title.toLowerCase().includes(query.toLowerCase())
    )

    const sortProducts = (sorting, products) => {
        switch (sorting) {
          case 'price-asc':
            return [...products].sort((a, b) => a.price.localeCompare(b.price));
          case 'price-desc':
            return [...products].sort((a, b) => b.price.localeCompare(a.price));
          case 'name-asc':
            return [...products].sort((a, b) => a.title.localeCompare(b.title));
          case 'name-desc':
            return [...products].sort((a, b) => b.title.localeCompare(a.title));
          default:
            return products;
        }
    };

    const sortedAndFilteredProducts = sortProducts(sorting, filterdProducts);

    return (
        <>
            <h1>Каталог</h1>

            <div className="filtered">

                <Filter sorting={sorting} handleSortingChange={handleSortingChange} />

                <Search query={query} onChangeQuery={onChangeQuery} />
                
            </div>

            <div className="cards">
            {sortedAndFilteredProducts.length ? (
                sortedAndFilteredProducts.map((product, index) => (
                    <Card key={index} {...product} />
                ))
                ) : (
                <h2>По вашему запросу `{query}` ничего не найдено!</h2>
            )}
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