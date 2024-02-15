import { NavLink, useParams } from 'react-router-dom';
import { products } from '../data';
import Back from "../../public/icons/back.svg"
import '../index.css'

// eslint-disable-next-line react/prop-types
const ProductPage = () => {
  const { id } = useParams();
  // eslint-disable-next-line react/prop-types
  const product = products.find(product => product.id === parseInt(id));

  if(!product) {
    return <h2>Такого продукта нет</h2>
  }

  return (

    <>
    <NavLink to="/">
        <div className="arrowBack">
            <img src={Back} alt="back" />
        </div>
        <p>Назад</p>
    </NavLink>

      <h2>{product.title}</h2>
      <p>{product.price}</p>
    </>
  );
};

export default ProductPage;
