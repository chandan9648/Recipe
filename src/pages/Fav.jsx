import { useContext } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "../Components/RecipeCard";
import { recipecontext } from "../context/recipecontext";

const Fav = () => {
  const { favorites = [], setFavorites } = useContext(recipecontext);

  const clearAll = () => setFavorites([]);

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Favorites</h1>
        {favorites.length > 0 && (
          <button
            onClick={clearAll}
            className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            Clear All
          </button>
        )}
      </div>

      {favorites.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favorites.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe.id} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-lg mb-4">No favorites yet.</p>
          <Link
            to="/recipes"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Browse Recipes
          </Link>
        </div>
      )}
    </div>
  );
};

export default Fav;