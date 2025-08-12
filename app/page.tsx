"use client";

import BookMeButton from "@/components/BookMeButton";
import AddToCartButton from "@/components/AddToCartButton";

const products = [
  { id: "1", name: "Paracetamol", price: 100, image: "/paracetamol.jpg" },
  { id: "2", name: "Vitamin C", price: 200, image: "/vitamin-c.jpg" },
  { id: "3", name: "Cough Syrup", price: 150, image: "/cough-syrup.jpg" },
];

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Welcome to Clinica.pk</h1>
      <p className="mb-4">Click below to book a doctor:</p>
      <BookMeButton />

      <h2 className="text-lg font-bold mt-8 mb-4">Buy Medicine</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <h3 className="font-semibold mt-2">{product.name}</h3>
            <p className="text-gray-600">Rs. {product.price}</p>
            <AddToCartButton product={product} />
          </div>
        ))}
      </div>
    </main>
  );
}
