export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-red-100">
      <div className="bg-white p-10 rounded-xl shadow-lg w-96">
        <h1 className="text-3xl font-bold text-red-600 mb-6 text-center">
          Contact Us
        </h1>

        <input
          type="text"
          placeholder="Your Name"
          className="border w-full p-2 rounded mb-4"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="border w-full p-2 rounded mb-4"
        />

        <button className="bg-red-600 text-white w-full py-2 rounded hover:bg-red-700">
          Send
        </button>
      </div>
    </div>
  );
}