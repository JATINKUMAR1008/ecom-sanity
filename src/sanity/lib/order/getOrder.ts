import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export async function getOrders(userId: string) {
  if (!userId) {
    throw new Error("User id is required");
  }
  const ORDER_QUERY = defineQuery(`
        *[_type=="order" && clerkCustomerId==$userId] | order(orderDate desc){
            ...,
            products[]{
                ...,
                product->
            }
        }
        `);
  try {
    const orders = await sanityFetch({
      query: ORDER_QUERY,
      params: {
        userId,
      },
    });
    return orders.data || [];
  } catch (e) {
    console.error(e);
    return [];
  }
}
