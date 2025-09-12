import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";

const Create = () => {
  const { data, setData } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    setData([...data, recipe]);
    reset();
  }

  return (
    <div className=" flex justify-start items-start p-20">
      <form onSubmit={handleSubmit(SubmitHandler)}>

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
        <small className="text-red-600">This is how the error shown</small>

        {/* ingredients */}
        <textarea
          className="border-b outline-0 block "
          {...register("ingredients")}
          placeholder="Write Ingredients seprated by comma"
        />
        <small className="text-red-600">This is how the error shown</small>
        {/* instructions */}
         <textarea
          className="border-b outline-0 block "
          {...register("instructions")}
          placeholder="Write Instructions seprated by comma"
        />
        <small className="text-red-600">This is how the error shown</small>

        {/* category */}
         <select
          className="border-b outline-0 block "
          {...register("category")}
        >
          <option className="bg-red-300 text-white" value="">Select Category</option>
          <option className="bg-red-300 text-black" value="breakfast">Breakfast</option>
          <option className="bg-red-300 text-black" value="lunch">Lunch</option>
          <option className="bg-red-300 text-black" value="dinner">Dinner</option>
        </select>

        {/* button */}
        <button className="block mt-5 bg-red-600 p-2 rounded cursor-pointer">Save Recipe</button>
      </form>
    </div>
  );
};

export default Create;
