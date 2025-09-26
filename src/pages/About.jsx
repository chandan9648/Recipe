

import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-white">
      {/* Hero */}
      <section className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold">About RecipeBox</h1>
        <p className="mt-3 text-white/90 max-w-3xl mx-auto">
          RecipeBox is a simple, fast, and friendly place to save your favorite recipes.
          Create your own, edit whenever you like, and mark favorites to find them in a tap.
        </p>
        <div className="mt-6 flex gap-3 justify-center">
          <Link to="/recipes" className="bg-white text-rose-600 font-semibold px-4 py-2 rounded hover:bg-gray-100">Browse Recipes</Link>
          <Link to="/create" className="bg-rose-600 text-white font-semibold px-4 py-2 rounded hover:bg-rose-700">Create Recipe</Link>
        </div>
      </section>

      {/* Stats */}
      <section className="grid gap-4 md:grid-cols-3 mb-10">
        <div className="bg-white/10 rounded-lg p-5 text-center">
          <div className="text-2xl font-extrabold">⚡ Fast</div>
          <p className="text-sm text-white/90 mt-1">Lightweight and instant edits</p>
        </div>
        <div className="bg-white/10 rounded-lg p-5 text-center">
          <div className="text-2xl font-extrabold">❤️ Favorites</div>
          <p className="text-sm text-white/90 mt-1">Save what you love in one place</p>
        </div>
        <div className="bg-white/10 rounded-lg p-5 text-center">
          <div className="text-2xl font-extrabold">🔒 Private</div>
          <p className="text-sm text-white/90 mt-1">Stored locally in your browser</p>
        </div>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-xl font-bold mb-4">What you can do</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-white/10 rounded-lg p-5">
            <div className="text-2xl mb-2"><i className="ri-add-circle-line"></i></div>
            <h3 className="font-semibold">Create & Edit</h3>
            <p className="text-sm text-white/90">Add recipes with title, image, ingredients, instructions, and update anytime.</p>
          </div>
          <div className="bg-white/10 rounded-lg p-5">
            <div className="text-2xl mb-2"><i className="ri-heart-3-line"></i></div>
            <h3 className="font-semibold">Mark Favorites</h3>
            <p className="text-sm text-white/90">Tap the heart icon to quickly get back to your go-to dishes.</p>
          </div>
          <div className="bg-white/10 rounded-lg p-5">
            <div className="text-2xl mb-2"><i className="ri-search-line"></i></div>
            <h3 className="font-semibold">Search & Filter</h3>
            <p className="text-sm text-white/90">Find recipes by title, chef, or category and sort the way you like.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
