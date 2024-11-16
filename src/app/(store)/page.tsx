import { ProductView } from "@/components/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import Image from "next/image";

export default async function Home() {
  const products = await getAllProducts()
  const categories = await getAllCategories()
  return (
    <div>
      <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100">
          <ProductView products={products} categories={categories}/>
      </div>
    </div>
  );
}
