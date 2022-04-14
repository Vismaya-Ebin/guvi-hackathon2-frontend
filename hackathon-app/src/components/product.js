import React from "react";
import "../App.css";

import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const productInfo = [
  {
    id: 1,
    image: "https://m.media-amazon.com/images/I/81d-4fJsnDL._AC_SL1500_.jpg",
    title: "Camera",
    price: "155895.00 Rs",
    time: "90 Days",
  },
  {
    id: 2,
    title: "Tablet",
    image: "https://m.media-amazon.com/images/I/71E378hYR7L._AC_SL1500_.jpg",
    price: "365871.00 Rs",
    time: "50 days",
  },
  {
    id: 3,
    image: "https://m.media-amazon.com/images/I/81d-4fJsnDL._AC_SL1500_.jpg", 
    title: "Camera",

    price: "100.00 Rs",
    time: "5 days",
  },
  {
    id: 4,
    title: "Tablet",
    image: "https://m.media-amazon.com/images/I/71E378hYR7L._AC_SL1500_.jpg",
    price: "15500.00 Rs",
    time: "15 days",
  },
  {
    id: 5,
    image:
      "https://www.ikea.com/ae/en/images/products/vallentuna-sofa-bed-module-with-backrests-kelinge-rust__0938369_pe794076_s5.jpg?f=xl",
    price: "1554.90Rs",
    title:"Sofa",
    time: "30 days",
  },
  {
    id: 6,
    title: "Tablet",
    image: "https://m.media-amazon.com/images/I/71E378hYR7L._AC_SL1500_.jpg",
    price: "34256.56 Rs",
    time: "1 day",
  },
  {
    title:"Sofa",
    image:
      "https://www.ikea.com/ae/en/images/products/vimle-2-seat-sofa-bed-gunnared-medium-grey__0787226_pe763189_s5.jpg?f=xl",
    price:"23345.00 Rs",
    time: "10 days",
    id: 7,
  },
  {
    title:"Bed",
    price: "12345.00 Rs",
    time: "15 days",
    id: 8,
    image:
      "https://www.ikea.com/ae/en/images/products/malm-bed-frame-high-w-2-storage-boxes-black-brown-luroey__0637597_pe698414_s5.jpg?f=xl",
  },
];

export const Product = () => {
  return (
    <div className="product-container">
      {productInfo.map((product, index) => (
        <div className="product-cover"> 
          <img src={product.image} alt="image" className="product-image" />
          <div className ="details-container">
           
            <p  className="detail"> {product.title}<br/> {product.time} &nbsp;&nbsp;{product.price}</p>
            <p  className="btn">
            <IconButton color="black" aria-label="add to shopping cart">
            <AddShoppingCartIcon />
            </IconButton>
            </p>
            </div>
        </div>
      ))}
    </div>
  );
};
