import React from "react";
import Pizza from "./Pizza";
import pizzaData from "../Data/data";

const Menu = () => {
  let pizzas = pizzaData;
  // pizzas = [];
  const pizzaDataLenth = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Fuckin Menu!!</h2>

      {/* check if there are pizzas in data */}
      {pizzaDataLenth <= 0 ? (
        <p>No pizzas available</p>
      ) : (
        <>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
            officiis deserunt. Cumque modi delectus rerum.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza key={pizza.name} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      )}
    </main>
  );
};

export default Menu;
