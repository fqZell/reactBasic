import Banner from "./components/Banner/Banner"
import Card from "./components/Card/Card"
import Header from "./components/Header/Header"
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

        </main>

      </div>
    </>
  )
}

export default App
