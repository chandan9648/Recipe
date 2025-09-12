import React from "react";
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";

const Recipe = () => {
  const { data } = useContext(recipecontext);
  const renderrecipes = data.map((recipe) => (
    <div key={recipe.id}>
      <h2>{recipe.title}</h2>
    </div>
  ));

  return (
    <div className="  justify-start items-start p-20">{renderrecipes}</div>
  );
};

export default Recipe;
