'use client';

export default function BookMeButton() {
  const handleClick = () => {
    alert('Doctor booking flow goes here!');
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      Book Me
    </button>
  );
}
