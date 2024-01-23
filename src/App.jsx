import Banner from "./components/Banner/Banner"
import Button from "./components/Button/Button"
import Card from "./components/Card/Card"
import Header from "./components/Header/Header"
import Slider from "./components/Slider/Slider"
import { products } from "./data"


function App() {

  return (
    <>
      <div className="container">

        <Header />

        <main>

          <Banner />

          <h2>Каталог</h2>

          <div className="cards">

          {products.map((product, index) => (
            <Card key={index} {...product} />
          ))}

          </div>

          <div className="button-wrapper">
            <Button backgroundColor="black" color="white">Каталог</Button>
          </div>

          <h2>Популярные товары</h2>

          <div className="populars">

            <Slider />

          </div>

        </main>

      </div>
    </>
  )
}

export default App
