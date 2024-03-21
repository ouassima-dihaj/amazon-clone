import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./checkoutProduct";
function Checkout() {

  const [{basket,user},dispatch]=useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>
             
          {basket.map((item) => (
    <CheckoutProduct
        key={item.id} // Add a unique key for each item
        id={item.id}
        image={item.image}
        title={item.title}
        price={item.price}
        rating={item.rating}
    />
))}

        </div>
      </div>
      <div className="checkout__right">
        <h2>welcome {user?.email  }</h2>
        <h2>The subtotal will fo here </h2>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
