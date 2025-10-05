import React, { useEffect, useState } from "react";
import { recipecontext as RECIPECONTEXT } from "./recipecontext";

const RecipeContext = (props) => {
  const [data, setData] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("recipe")) || []);
    setFavorites(JSON.parse(localStorage.getItem("favorite")) || []);
  }, []);

  // Persist favorites when they change
  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorites));
  }, [favorites]);



  //   {
  //     "id": 1,
  //     "title": "Classic Margherita Pizza",
  //     "ingredients": [
  //       "Pizza dough",
  //       "Tomato sauce",
  //       "Fresh mozzarella cheese",
  //       "Fresh basil leaves",
  //       "Olive oil",
  //       "Salt and pepper to taste"
  //     ],
  //     "instructions": [
  //       "Preheat the oven to 475°F (245°C).",
  //       "Roll out the pizza dough and spread tomato sauce evenly.",
  //       "Top with slices of fresh mozzarella and fresh basil leaves.",
  //       "Drizzle with olive oil and season with salt and pepper.",
  //       "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
  //       "Slice and serve hot."
  //     ],
   
  //     image: "https://cdn.dummyjson.com/recipe-images/1.webp",
  //    chef: "chandan",
  //     category: "dinner",
  //     desc: "Roll out the pizza dough and spread tomato sauce evenly. Top with slices of fresh mozzarella and fresh basil leaves.",
      
  //   },
  // 



  return (
    <RECIPECONTEXT.Provider value={{ data, setData, favorites, setFavorites }}>
      {props.children}
    </RECIPECONTEXT.Provider>
  );
};

export default RecipeContext;
