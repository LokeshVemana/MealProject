import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Main.css";
const Main = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const itemsList = items.map((meal) => {
    return (
      <section className="card" key={meal.idMeal}>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <section className="content">
          <p>{meal.strMeal}</p>
          <p>{meal.idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className="items-container">{itemsList}</div>;
};

export default Main;
