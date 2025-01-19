import React from 'react'
import { useContext } from 'react';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';
import { useNavigate } from "react-router-dom";

const CartTotal = () => {
  
  const navigate = useNavigate();
  
  const { currency, delivery_fee, subtotal, total, getCartAmount } =
    useContext(ShopContext);

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTALS"}></Title>
      </div>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {getCartAmount()}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>
            {currency} {delivery_fee}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}{" "}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
          </b>
        </div>
      </div>
     
    </div>
  );
}

export default CartTotal