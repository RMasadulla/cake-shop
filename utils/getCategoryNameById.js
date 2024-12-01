import categoriesData from "../data/categories.json";

export const getCategoryNameById = (categoryId) => {
  const category = categoriesData.find(
    (category) => category?.id === categoryId
  );
  return category ? category.name : "";
};
