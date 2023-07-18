import React, { useState } from "react";
import style from "./Detail.module.css";
//import { Link, useParams } from "react-router-dom";

const Detail = ({ product, img }) => {
  const [quantity, setQuantity] = useState(1);

  // Función para disminuir la cantidad
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  // Función para aumentar la cantidad
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const [setSelectedImage] = useState < string > "";

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <section className={style.container}>
      <div className={style.containerImage}>
        <img
          src={image}
          className={style.preImage}
          onClick={() => handleImageClick(img)}
        />
      </div>
      <div className={style.containerDetail}>
        <h1 className={style.h1}>{product.name}</h1>
        <h3 className={style.h3}>Estrellas:</h3>
        <h3 className={style.h3}>{product.rating}⭐</h3>
        <h2 className={style.h2}>${product.price}</h2>
        <h2 className={style.h2}>Categoria:</h2>
        <h3 className={style.h3}>{product.categoryName}</h3>
        <div className={style.containerDescription}>
          <h2>Descripción:</h2>
          <p className={style.detail}>{product.description}</p>
        </div>
        <div className={style.containerOptions}>
          <h2>Colores:</h2>
          <p className={style.colors}>{product.colors}</p>
        </div>
        <div className={style.containerSize}>
          <h2>Tamaño:</h2>
          <p className={style.size}>{product.size}</p>
        </div>
        <div className={style.containerQuantity}>
          <button className={style.buttonQuantity} onClick={decreaseQuantity}>
            -
          </button>
          <p className={style.quantity}>{product.size}</p>
          <button className={style.buttonQuantity} onClick={increaseQuantity}>
            =
          </button>
          <button className={style.buttonBuy} onClick={buy}>
            =
          </button>
        </div>
      </div>
      <div className={style.containerRating}>
        <Rating />
      </div>
      <div className={style.containerBestSellers}>
        <bestSellers />
      </div>
      <footer>
        <Footer />
      </footer>
    </section>
  );
};

export default Detail;
