import React from "react";
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../Components/RecipeCard";

const Recipe = () => {
  const { data } = useContext(recipecontext);
  const renderrecipes = data.map((recipe) => (
    <RecipeCard recipe={recipe} key={recipe.id} />
  ));

  return (
    <div className="  justify-start items-start p-20 flex flex-wrap">{data.length > 0 ? renderrecipes : <p>No recipes found</p>}</div>
  );
};

export default Recipe;
