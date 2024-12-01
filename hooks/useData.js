import categoriesData from "../data/categories.json";
import recipesData from "../data/recipes.json";

export default function useData() {
  return { recipesData, categoriesData };
}
