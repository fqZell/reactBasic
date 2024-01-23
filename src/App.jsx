import Banner from "./components/Banner/Banner"
import Button from "./components/Button/Button"
import Card from "./components/Card/Card"
import Header from "./components/Header/Header"
import Partner from "./components/Partner/Partner"
import Slider from "./components/Slider/Slider"
import Subscription from "./components/Subscription/Subscription"
import { partners, products } from "./data"


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

          <h2>Наши партнёры</h2>

          <div className="partners">

            {partners.map((partner, index) => (
              <Partner key={index} {...partner} />
            ))}

          </div>

        </main>

      </div>

      <footer>

        <div className="subscriptions">  

            <Subscription />

        </div>

      </footer>
    </>
  )
}

export default App
