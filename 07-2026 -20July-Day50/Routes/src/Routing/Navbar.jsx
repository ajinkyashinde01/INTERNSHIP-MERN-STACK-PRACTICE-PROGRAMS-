import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./about";
import Contact from "./contact";
import Services from "./services";

export default function Navbar() {
  return (
    <BrowserRouter>
      <>
        <nav className="bg-blue-600 text-white shadow-md">
          <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.-vcXb9c2NTeNSEAnsGpzfQHaCO?r=0&pid=Api&h=220&P=0"
              alt="Logo"
              className="h-12 w-auto"
            />
            <ul className="flex gap-6">
              <li>
                <a href="/" className="hover:text-yellow-300">
                  Home
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-yellow-300">
                  About
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-yellow-300">
                  Contact
                </a>
              </li>

              <li>
                <a href="/services" className="hover:text-yellow-300">
                  Services
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}