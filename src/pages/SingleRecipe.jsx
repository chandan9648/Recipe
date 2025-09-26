import React, { useContext, useEffect } from "react";
import {  useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SingleRecipe = () => {
  const { data, setData, favorites, setFavorites } = useContext(recipecontext);
  const navigate = useNavigate();
  const params = useParams();
  // Match id regardless of it being number (seed) or string (nanoid)
  const recipe = data.find((r) => String(r.id) === String(params.id));

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {},
  });

  // When recipe becomes available (after data load), populate form
  useEffect(() => {
    if (recipe) {
      reset({
        title: recipe.title || "",
        image: recipe.image || "",
        desc: recipe.desc || "",
        chef: recipe.chef || "",
        ingr: recipe.ingr || "",
        inst: recipe.inst || "",
        category: recipe.category || "",
      });
    }
  }, [recipe, reset]);

  const UpdateHandler = (recipe) => {
    const index = data.findIndex((r) => String(r.id) === String(params.id));
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setData(copydata);
    localStorage.setItem("recipe", JSON.stringify(copydata));
    toast.success("Recipe Updated!");
    reset();
  };

  const DeleteHandler = () => {
    if (!confirm("Delete this recipe?")) return;
    const filterdata = data.filter((r) => r.id !== recipe.id);
    setData(filterdata);
    localStorage.setItem("recipe", JSON.stringify(filterdata));
    toast.info("Recipe Deleted!");
    navigate("/recipes");
  };

  const isFav = favorites.some((f) => String(f.id) === String(recipe.id));

  const FavHandler = () => {
    if (isFav) return;
    const updated = [...favorites, recipe];
    setFavorites(updated);
    // toast.success("Added to Favorites");
  };

  const UnfavHandler = () => {
    if (!isFav) return;
    const updated = favorites.filter((f) => String(f.id) !== String(recipe.id));
    setFavorites(updated);
    // toast.info("Removed from Favorites");
  };

  if (!recipe) {
    // Data loaded but recipe not found
    if (data.length > 0) return <div className="p-4">Recipe not found.</div>;
    // Still loading localStorage data
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="flex w-full">
      <div className="relative cursor-pointer w-1/2 p-5 justify-center items-center ">
        {isFav ? (
          <i
            onClick={UnfavHandler}
            className="absolute cursor-pointer right-[10%] text-2xl text-red-600 ri-heart-fill"
            title="Remove from favorites"
          ></i>
        ) : (
            <i
              onClick={FavHandler}
              className="absolute right-[10%] cursor-pointer text-2xl text-gray-400 hover:text-red-500 ri-heart-line"
              title="Add to favorites"
            ></i>
        )}
      
        <h1 className="text-4xl font-black">{recipe.title}</h1>
        <img className="h-[20vh]" src={recipe.image} alt="image" />
        <p className="text-sm my-2">{recipe.desc}</p>

        {/* details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <h4 className="font-semibold mb-1">Ingredients</h4>
            <ul className="list-disc list-inside text-sm">
              {(recipe.ingr || "")
                .split(",")
                .map((i) => i.trim())
                .filter(Boolean)
                .map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Instructions</h4>
            <ol className="list-decimal list-inside text-sm space-y-1">
              {(recipe.inst || "")
                .split(",")
                .map((i) => i.trim())
                .filter(Boolean)
                .map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
            </ol>
          </div>
        </div>
      </div>

      {/* form */}
      <form className="w-1/2 p-2" onSubmit={handleSubmit(UpdateHandler)}>
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
        <select className="border-b outline-0 block " {...register("category")}>
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
  );
};

export default SingleRecipe;
