import React, { useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./checkoutProduct";
import { Link } from "react-router-dom";

function Payment(){
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (
          <Link to="/checkout">
            {" "}
            <span style={{ color: "black" }}>{basket?.length} items </span>
          </Link>
          )
        </h1>
        {/**payment section - delevry adress */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Calefornia,usa</h3>
          </div>
          <div className="payment__address">
            <p> {user?.email}</p>
          </div>
        </div>
        {/**payment section  -review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review item and delivrey</h3>
          </div>

          <div className="payment__item">
            {/**all the product */}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/**payment section - Payment method  */}
        <div className="payment__section">
          <div className="payment__title">
            <h3> payment Method </h3>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default Payment;
