import { z } from "zod";
import {
  CategoriesApiResponseSchema,
  DrinkAPIResponse,
  DrinksAPIResponse,
  RecipeAPIResponseSchema,
  SearchFilterSchema,
} from "../utils/recipes-schemas";

export type Categories = z.infer<typeof CategoriesApiResponseSchema>;
export type Drinks = z.infer<typeof DrinksAPIResponse>;
export type Drink = z.infer<typeof DrinkAPIResponse>;
export type SearchFilter = z.infer<typeof SearchFilterSchema>;
export type Recipe = z.infer<typeof RecipeAPIResponseSchema>
