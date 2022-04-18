import "./App.css";
import { Header } from "./components/header/header";

import { Product } from "./components/product/product";
import { useState , useEffect} from "react";
import { Cart } from "./components/cart/Cart";
import {API} from "./components/global";


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [productInfo, setproductInfo] = useState([]);
  const getRentalDetails = () =>{
    fetch(`${API}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((details) => {
        console.log("111111Movie Details", details);
        setproductInfo(details);
      });
  };
  useEffect(getRentalDetails,[]);
 
  //Input is the product that need to added to the cart
  const onAdd = (product) => {
    cartItems.push(product);
    setCartItems([...cartItems, product]);
    const exist = cartItems.find((item) => item.id === product.id);

    //check whether that product exist or not
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: 0 + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  return (
    <div className="App">
      <Header />
      <div className="row">
        <Product productInfo={productInfo} onAdd={onAdd} />
        <Cart cartItems={cartItems} onAdd={onAdd} />
      </div>
    </div>
  );
}

export default App;
