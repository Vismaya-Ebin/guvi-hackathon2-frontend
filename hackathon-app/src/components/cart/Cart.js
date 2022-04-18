import React from "react";
import './cart.css';
export function Cart({ cartItems ,onAdd,onRemove}) {
  console.log(`inside Cart component`,cartItems);
  return (
    <aside className="cart-container">
   
      {cartItems.length === 0 ? (
        <div className="empty-cart">Cart is Empty</div>
      ) : (
        <div className="cart-items">Cart have items to Checkout</div>
      )}

      
      {cartItems.map((item) => (
          <div key={item.id} className="cart-container">
            <div className="col-2">{item.title}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

          
          </div>
        ))}
    </aside>
  );
}
