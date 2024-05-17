import axios from "axios";
import { CategoriesApiResponseSchema, DrinksAPIResponse } from "../utils/recipes-schemas";
import { SearchFilter } from "../types";

export async function getCategories() {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
  console.log("done");
  const { data } = await axios(url);
  const result = CategoriesApiResponseSchema.safeParse(data);
  if (result.success) {
    return result.data;
  }
}

export async function getRecipes(filters: SearchFilter) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`;
  const { data } = await axios(url);
  const result = DrinksAPIResponse.safeParse(data);
  if (result.success) {
    return result.data;
  }
}
