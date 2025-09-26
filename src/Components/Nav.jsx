import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur bg-red-300/80 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <NavLink to="/" className="font-extrabold text-lg text-black">Recipe<span className="text-red-700">Box</span></NavLink>

        <div className="flex gap-6 text-black font-semibold">
          <NavLink
            className={({ isActive }) =>
              `hover:text-red-700 ${isActive ? "text-red-700 underline underline-offset-4" : ""}`
            }
            to="/"
          >
            <i className="ri-home-line mr-1"></i> Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:text-red-700 ${isActive ? "text-red-700 underline underline-offset-4" : ""}`
            }
            to="/recipes"
          >
            <i className="ri-restaurant-2-line mr-1"></i> Recipes
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:text-red-700 ${isActive ? "text-red-700 underline underline-offset-4" : ""}`
            }
            to="/about"
          >
            <i className="ri-information-line mr-1"></i> About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:text-red-700 ${isActive ? "text-red-700 underline underline-offset-4" : ""}`
            }
            to="/create"
          >
            <i className="ri-add-line mr-1"></i> Create
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `hover:text-red-700 ${isActive ? "text-red-700 underline underline-offset-4" : ""}`
            }
            to="/fav"
          >
            <i className="ri-heart-3-line mr-1"></i> Favorites
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
