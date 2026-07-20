export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center w-96">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome
        </h1>

        <p className="text-gray-600 mb-6">
          Welcome to our React Website built with Tailwind CSS.
        </p>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  );
}