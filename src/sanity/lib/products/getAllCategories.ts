import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getAllCategories = async () => {
  const ALL_CATEGORIES_QUERY = defineQuery(`
        *[_type == "category"] | order(name asc)
        `);
  try {
    const products = await sanityFetch({
      query: ALL_CATEGORIES_QUERY,
    });
    return products.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
