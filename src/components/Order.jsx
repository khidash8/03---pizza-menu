import React from "react";

const Order = ({ closeHour }) => {
  return (
    <div className="order">
      <p>we're open until {closeHour}:00. Visit us or order online</p>
      <button className="btn">Order Now</button>
    </div>
  );
};

export default Order;
