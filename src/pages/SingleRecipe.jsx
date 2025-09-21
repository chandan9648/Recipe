import React, { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SingleRecipe = () => {
   const { data, setData } = useContext(recipecontext);
  const navigate = useNavigate();
  const params = useParams();
  const recipe = data.find((recipe) => parseInt(params.id) === recipe.id);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe.title,
      image: recipe.image,
      desc: recipe.desc,
      chef: recipe.chef,
      ingr: recipe.ingr,
    }
  });

  const SubmitHandler = (recipe) => {
    const index = data.findIndex((r) => parseInt(params.id) === r.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setData(copydata);
    toast.success("Recipe Updated!");
    reset();
  };

  
  const DeleteHandler = () => {
    const filterdata = data.filter((r) => r.id !== recipe.id);
    setData(filterdata);
    toast.success("Recipe Deleted!");
    navigate("/recipe");
  };

  return recipe ? (
    <div className="flex w-full">
      <div className="left w-1/2 p-2">
        <h1 className="text-4xl font-black">{recipe.title}</h1>
        <img className="h-[20vh]" src={recipe.image} alt="image" />
        <p className="text-sm my-2">{recipe.desc}</p>
       
      </div>

      {/* form */}
      <form className="w-1/2 p-2" onSubmit={handleSubmit(SubmitHandler)}>
        {/* url */}
        <input
          className="border-b outline-0 block"
          {...register("image")}
      
          type="url"
          placeholder="Enter Image URL"
        />
        <small className="text-red-600">This is how the error shown</small>

        {/* title */}
        <input
          className="border-b outline-0 block"
          {...register("title")}
 
          type="text"
          placeholder="Recipe Title"
        />
        {/* chef */}
        <input
          className="border-b outline-0 block"
          {...register("chef")}
     
          type="text"
          placeholder="Chef Name"
        />
        {/* desc */}
        <textarea
          className="border-b outline-0 block "
          {...register("desc")}
    
          placeholder="//Start from here"
        />

        {/* ingredients */}
        <textarea
          className="border-b outline-0 block "
          {...register("ingr")}
          placeholder="Write Ingredients seprated by comma"
        />

        {/* instructions */}
        <textarea
          className="border-b outline-0 block "
          {...register("inst")}
          placeholder="Write Instructions seprated by comma"
        />

        {/* category */}
        <select
          className="border-b outline-0 block "
          {...register("category")}
       
        >
          <option className="bg-red-300 text-white" value="">
            Select Category
          </option>
          <option className="bg-red-300 text-black" value="breakfast">
            Breakfast
          </option>
          <option className="bg-red-300 text-black" value="lunch">
            Lunch
          </option>
          <option className="bg-red-300 text-black" value="dinner">
            Dinner
          </option>
        </select>

        {/* button */}
        <button className="block mt-5 bg-green-600 p-2 rounded cursor-pointer">
          Update Recipe
        </button>
        <button
          onClick={DeleteHandler}
          className="block mt-5 bg-red-600 p-2 rounded cursor-pointer"
        >
          Delete Recipe
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
