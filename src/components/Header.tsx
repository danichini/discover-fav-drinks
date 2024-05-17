import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  const isHome = useMemo(() => pathname === "/", [pathname]);

  return (
    <header className="bg-slate-800">
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
                name="ingredient"
                id="ingredient"
                className="p-3 w-full rounded-lg focus:outline-none"
              >
                <option value={""}>-- Select --</option>
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
