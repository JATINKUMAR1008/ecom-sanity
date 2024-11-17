"use client"
import useBasketStore from "@/store";
import { Product } from "../../sanity.types";
import { useEffect, useState } from "react";

export const AddToBasketButton = ({
  product,
  disabled,
}: {
  product: Product;
  disabled?: boolean;
}) => {
  const { addItem, getItemCount, removeItem } = useBasketStore();
  const itemCount = getItemCount(product._id);
  const [isClient, setIsCient] = useState(false);
  useEffect(() => {
    setIsCient(true);
  }, []);
  if (!isClient) {
    return null;
  }
  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={() => removeItem(product._id)}
        className={`size-8 rounded-full flex items-center justify-center transition-colors duration-200 ${itemCount === 0 ? "bg-gray-100 cursor-not-allowed" : "bg-gray-200 hover:bg-gray-300"}`}
        disabled={itemCount === 0 || disabled}
      >
        <span
          className={`text-xl font-bold ${itemCount === 0 ? "text-gray-400" : "text-gray-600"}`}
        >
          -
        </span>
      </button>
      <span className="w-8 text-center font-semibold">{itemCount}</span>
      <button
        onClick={() => addItem(product)}
        className={`size-8 rounded-full flex items-center justify-center transition-colors duration-200 ${disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
        disabled={disabled}
      >
        <span className={`text-xl font-bold text-white`}>+</span>
      </button>
    </div>
  );
};
