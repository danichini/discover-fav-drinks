import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";

export default function Header() {
  const [searchFilters, setSearchFilters] = useState({
    ingredient: "",
    category: "",
  });
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);
  const { fetchCategories, categories } = useAppStore();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  function handleChange(
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <header
      className={isHome ? "bg-header bg-center bg-cover" : "bg-slate-800"}
    >
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src="/logo.svg" alt="logo" />
          </div>
          <nav className="flex gap-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/favourites"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 uppercase font-bold"
                  : "text-white uppercase font-bold"
              }
            >
              Favourites
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form className="md:w-1/2 2xl:2-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6 ">
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Name or Ingredient
              </label>
              <input
                type="text"
                name="ingredient"
                id="ingredient"
                className="p-3 w-full rounded-lg focus:outline-none"
                placeholder="Name or Ingredient. (Vodka, Tequila, Coffee"
                onChange={handleChange}
                value={searchFilters.ingredient}
              />
            </div>
            <div className="space-y-4">
              <label
                htmlFor="ingredient"
                className="block text-white uppercase font-extrabold text-lg"
              >
                Category
              </label>
              <select
                name="category"
                id="category"
                className="p-3 w-full rounded-lg focus:outline-none"
                onChange={handleChange}
                value={searchFilters.category}
              >
                <option value={""}>-- Select --</option>
                {categories.drinks.map(({ strCategory }) => {
                  return (
                    <option key={strCategory} value={strCategory}>
                      {strCategory}
                    </option>
                  );
                })}
              </select>
            </div>
            <input
              type="submit"
              value={"Search Recipes"}
              className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold rounded-lg w-full p-2 uppercase"
            />
          </form>
        )}
      </div>
    </header>
  );
}
