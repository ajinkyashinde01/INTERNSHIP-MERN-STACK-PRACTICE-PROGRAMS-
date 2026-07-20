export default function Services() {
  return (
    <div className="min-h-screen bg-purple-100 p-10">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">
        Our Services
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-xl font-bold mb-2">Web Design</h2>
          <p>Modern and responsive websites.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-xl font-bold mb-2">React Development</h2>
          <p>Fast and interactive web applications.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <h2 className="text-xl font-bold mb-2">UI Design</h2>
          <p>Clean and attractive user interfaces.</p>
        </div>
      </div>
    </div>
  );
}