
import RecipeCard from "../Components/RecipeCard";


const Fav = () => {
const favorite = JSON.parse(localStorage.getItem("fav")) || [];

  const renderrecipes = favorite.map((recipe) => (
    <RecipeCard recipe={recipe} key={recipe} />
  ));

  return (
    <div className="  justify-start items-start p-20 flex flex-wrap">
        {favorite.length > 0 ? renderrecipes : <p>No favorite found</p>}</div>
  );
}

export default Fav;