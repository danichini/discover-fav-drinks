import { z } from "zod";
import { CategoriesApiResponseSchema } from "../utils/recipes-schemas";

export type Categories = z.infer<typeof CategoriesApiResponseSchema>;
