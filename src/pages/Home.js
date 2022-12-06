import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Styles from '../styles/Home.module.css'

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className={Styles.HContainer}>
      {products.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default Home;
