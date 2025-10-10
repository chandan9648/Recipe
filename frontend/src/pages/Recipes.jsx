import React, { useEffect, useMemo, useState } from "react";
import { useContext } from "react";
import { recipecontext } from "../context/recipecontext";
import RecipeCard from "../Components/RecipeCard";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "../context/auth";

const Recipe = () => {
  const { data } = useContext(recipecontext);
  const { isSeller } = useAuth() || {};
  const [searchParams, setSearchParams] = useSearchParams();

  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [sort] = useState("new");

  const filtered = useMemo(() => {
    const term = q.toLowerCase();
    let list = data.filter(r => {
      const inTitle = (r.title || "").toLowerCase().includes(term);
      const inChef = (r.chef || "").toLowerCase().includes(term);
      const catOk = cat === "all" || String(r.category || "").toLowerCase() === cat;
      return (inTitle || inChef) && catOk;
    });
    if (sort === "new") {
      list = list.slice().sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
    } else if (sort === "az") {
      list = list.slice().sort((a, b) => (a.title || "").localeCompare(b.title || ""));
    }
    return list;
  }, [data, q, cat, sort]);

  // initialize from URL
  useEffect(() => {
    const qp = (searchParams.get("cat") || "all").toLowerCase();
    if (["all","breakfast","lunch","dinner","dessert"].includes(qp)) {
      setCat(qp);
    }
    const qs = searchParams.get("q") || "";
    if (qs) setQ(qs);
  }, [searchParams]);

  // update URL when filters change
  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    if (cat && cat !== "all") next.set("cat", cat); else next.delete("cat");
    if (q) next.set("q", q); else next.delete("q");
    setSearchParams(next, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cat, q]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-bold">All Recipes</h1>
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by title or chef"
            className="px-3 py-1 rounded text-black border-l-2 border-r-2"
          />
          <select value={cat} onChange={(e) => setCat(e.target.value)} className="px-3 py-1 rounded text-black border-l-2 border-r-2">
            <option value="all">All</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
          </select>
          {/* <select value={sort} onChange={(e) => setSort(e.target.value)} className="px-3 py-1 rounded text-black">
            <option value="new">Newest</option>
            <option value="az">A → Z</option>
          </select> */}
          {/* <button
            type="button"
            onClick={() => { setQ(""); setCat("all"); setSort("new"); }}
            className="px-3 py-1 rounded bg-white/20 hover:bg-white/30 text-white"
          >
            Reset
          </button> */}
          {isSeller && (
            <Link to="/create" className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm">+ Add Recipe</Link>
          )}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe.id} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="mb-4">No recipes found.</p>
          {isSeller && (
            <Link to="/create" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Create your first recipe</Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Recipe;
