import React from 'react'
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
    const {id, title, image, desc, chef} = props.recipe;
  return (
    <Link to={`/recipes/details/${id}`} className='block mr-3 mb-3 w-[16vw] shadow-lg bg-red-400 rounded-lg p-4 m-2 flex flex-wrap overflow-hidden items-start hover:scale-105 duration-300'>
    <img className='w-full h-[25vh] object-cover rounded-md' src={image} alt="" />
    <h1 className='text-lg text-black font-black'>{title}</h1>
    <small className='text-rose-600 font-bold flex'>{chef}</small>
    <p className='text-sm'>{desc.slice(0, 100)}...<small className='text-blue-400'>More</small></p>
    </Link>
    
  )
}

export default RecipeCard;
