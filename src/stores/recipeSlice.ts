import { StateCreator } from "zustand";
import {
  getCategories,
  getRecipeId,
  getRecipes,
} from "../services/RecipeService";
import type { Categories, Drink, Drinks, SearchFilter, Recipe } from "../types";

export type RecipesSliceType = {
  categories: Categories;
  drinks: Drinks;
  selectedRecipe: Recipe;
  fetchCategories: () => Promise<void>;
  searchRecipes: (SearchFilters: SearchFilter) => Promise<void>;
  selectRecipe: (id: Drink["idDrink"]) => Promise<void>;
};

export const createRecipesSlice: StateCreator<RecipesSliceType> = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },
  selectedRecipe: {} as Recipe,
  fetchCategories: async () => {
    const categories = await getCategories();
    set({
      categories,
    });
  },
  searchRecipes: async (filters) => {
    const drinks = await getRecipes(filters);
    set({
      drinks,
    });
  },
  selectRecipe: async (id) => {
    const selectedRecipe = await getRecipeId(id);
    set({
      selectedRecipe,
    });
  },
});
