import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { recipecontext } from '../context/RecipeContext';

const SingleRecipe = () => {
  const {data} = useContext(recipecontext);
  const params = useParams();
  const recipe = data.find((recipe) => parseInt(params.id) === recipe.id);
  console.log(recipe);

    return recipe ? (
    <div className='flex w-full'>
      <div className='left w-1/2 p-2'>
        <h1 className='text-4xl font-black'>{recipe.title}</h1>
        <img className='h-[20vh]' src={recipe.image} alt="image"/>
      </div>
     <div className='right w-1/2 p-2'></div>
    </div>
      ) : (
        "Loading..."
      );
  };

export default SingleRecipe;
