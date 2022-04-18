import React from "react";
 import "././product.css";
 import { Cart } from "../cart/Cart";

import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";


export const Product = ({productInfo, onAdd}) => {
  
  return (
    <div className="product-container">
     
      {productInfo.map((product, index) => (
        <div className="product-cover" key={index}>
          <img  src={product.image} alt="image" className="product-image" />
          <div className="details-container">
            <p className="detail">
              {" "}
              {product.title}
              <br /> {product.time} &nbsp;&nbsp;{product.price}Rs
            </p>
            <p className="btn">
              <IconButton color="primary" aria-label="add to shopping cart" onClick={() => {onAdd(product)}}>
                <AddShoppingCartIcon />
              </IconButton>
            </p>
          </div>
        
        </div>


      ))}


    </div>
  );
};
