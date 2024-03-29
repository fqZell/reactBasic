import Card from "../components/Card/Card";
import { products } from "../data";
import Footer from "../components/Footer/Footer";
import { useState } from "react";
import Filter from "../components/Filter/Filter";
import Search from "../components/Search/Search";
import ModalContent from "../components/Modal/ModalContent";
import Header from "../components/Header/Header";
// eslint-disable-next-line react/prop-types
export default function Catalog() {

    const [sorting, setSorting] = useState('popular')
    const [query, setQuery] = useState("")
    const [cartItems, setCartItems] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleSortingChange = (event) => {
      setSorting(event.target.value);
    };

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

    const addToCart = (productId) => {
      const existingItem = cartItems.find(item => item.id === productId);
    
      if (existingItem) {
        setCartItems(cartItems.map(item => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }));
      } else {
        const productToAdd = products.find(product => product.id === productId);
        setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
      }
    };

  const openModal = () => {
      setModalIsOpen(true);
      document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
      setModalIsOpen(false);
      document.body.style.overflow = 'auto';
  };

    return (
        <>
          <Header cartItems={cartItems} openModal={openModal}/>
            <h1>Каталог</h1>

            <div className="filtered">

                <Filter sorting={sorting} handleSortingChange={handleSortingChange} />

                <Search query={query} onChangeQuery={onChangeQuery} />
                
            </div>

            <div className="cards">
            {sortedAndFilteredProducts.length ? (
                sortedAndFilteredProducts.map((product, index) => (
                    <Card key={index} {...product} addToCart={addToCart} />
                ))
                ) : (
                <h2>По вашему запросу `{query}` ничего не найдено!</h2>
            )}
            </div>

            <ModalContent closeModal={closeModal} cartItems={cartItems} modalIsOpen={modalIsOpen}/>

            <Footer />
        </>
    )
}