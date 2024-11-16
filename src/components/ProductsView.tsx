import { Category, Product } from "../../sanity.types";
import { ProductGrid } from "./ProductGrid";

interface ProductViewProps {
  products: Product[];
  categories: Category[];
}
export const ProductView = ({ products, categories }: ProductViewProps) => {
  return (
    <div className="flex flex-col">
      <div className="w-full sm:w-[200px]"></div>
      <div className="flex-1">
        <div>
          <ProductGrid products={products} />
          <hr className="w-1/2 sm:w-3/4" />
        </div>
      </div>
    </div>
  );
};
