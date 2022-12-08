import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';
import Styles from '../styles/Home.module.css'

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  console.log(cart);

  return (
    <div className={Styles.HContainer}>
      {cart.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default Cart;
