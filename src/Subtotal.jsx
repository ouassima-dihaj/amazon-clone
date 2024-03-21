import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { useNavigate } from 'react-router-dom';
 function Subtotal() {
  const navigate=useNavigate();
  const [{basket},dispatch]=useStateValue();
  let totalPrice=0;
  for (let index = 0; index < basket.length; index++) {
   totalPrice+=basket[index].price;
    
  }
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ( {basket.length} items): <strong>{totalPrice}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={totalPrice} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      
      <button onClick={e=>navigate('/payment')}>Proceed to Checkout</button>
     
          
    </div>
  )
}

export default Subtotal;
