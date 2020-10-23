import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal.js";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://m.media-amazon.com/images/G/01/digital/video/sonata/US_SVOD_TheBoys_S2_NowStreaming_CONTROL/fc19a988-4a45-4b5f-8e59-929039ccab1d._UR3000,600_SX1500_FMjpg_.jpg"
          alt=""
        />

        <div>
          <h3> Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
        <h2>the subtotal goes here</h2>
      </div>
    </div>
  );
}

export default Checkout;
