import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-screen h-15  flex justify-center gap-6   shadow-lg bg-red-300 rounded   text-black font-semibold items-center  text-lg  ">
      <NavLink
        className={({ isActive }) => (isActive ? "text-red-700" : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-red-700" : "")}
        to="/recipes"
      >
        Recipes
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-red-700" : "")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-red-700" : "")}
        to="/create"
      >
        Create-Recipe
      </NavLink>

      <NavLink
        className={({ isActive }) => (isActive ? "text-red-700" : "")}
        to="/fav"
      >
        Favorites
      </NavLink>
    </div>
  );
};

export default Nav;
