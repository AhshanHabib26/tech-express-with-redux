import React from 'react';
import Styles from '../styles/ProductCard.module.css';


const ProductCard = ({ product }) => {
  const { model, image, keyFeature, price, rating } = product;
  return (
    <div className="mt-3 px-4">
      <div className={Styles.PRWrapper}>
        <div className={Styles.PRContainer}>
          <div className={Styles.imageContainer}>
            <img src={image} alt="" />
          </div>
          <div className={Styles.detailsContainer}>
            <div className={Styles.PRTitle}>
              <h1>{model}</h1>
            </div>
            <div className={Styles.innerContainer}>
              <div className={Styles.PRPrice}>
                <h2>$ {price}</h2>
              </div>
              <div className={Styles.PRRating}>
                <h2>{rating}</h2>
              </div>
            </div>
            <div className={Styles.PRDetails}>
              {keyFeature.map((key) => (
                <li key={key}>{key}</li>
              ))}
            </div>
            <div className={Styles.btnContainer}>
              <div className={Styles.addToCart}>
                <button>Add to Cart</button>
              </div>
              <div className={Styles.buyNow}>
                <button>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
