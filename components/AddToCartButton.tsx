"use client";
import { useCart } from "../context/cartcontext";

type AddToCartButtonProps = {
  product: {
    id: string;
    name: string;
    price: number;
    image?: string;
  };
};

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() => addToCart(product)}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Add to Cart
    </button>
  );
}
