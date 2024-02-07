import { useParams } from 'react-router-dom';
import { products } from '../data';

// eslint-disable-next-line react/prop-types
const ProductPage = () => {
  const { id } = useParams();
  // eslint-disable-next-line react/prop-types
  const product = products.find(product => product.id === parseInt(id));

  if(!product) {
    return <h2>Такого продукта нет</h2>
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductPage;
