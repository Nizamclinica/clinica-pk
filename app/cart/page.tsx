"use client";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <main className="p-6">
        <h1 className="text-xl font-bold">Your Cart</h1>
        <p>Your cart is empty.</p>
      </main>
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>
      <ul className="space-y-4">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border p-4 rounded"
          >
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p>
                Rs. {item.price} x {item.quantity}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-6 font-bold">Total: Rs. {total}</div>
      <button
        onClick={clearCart}
        className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
      >
        Clear Cart
      </button>
    </main>
  );
}
