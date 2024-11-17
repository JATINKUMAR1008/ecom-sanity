import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const searchProductByName = async (name: string) => {
  const PRODUCT_SEARCH_QUERY = defineQuery(`
        *[_type == "product" && name match $name] | order(name asc)
    `);
  try {
    const products = await sanityFetch({
      query: PRODUCT_SEARCH_QUERY,
      params: { name: `${name}*` },
    });
    return products.data || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};
