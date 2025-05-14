import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Industries from "./pages/Industries.jsx";
import Contact from "./pages/Contact.jsx";
import Careers from "./pages/Careers.jsx";



function App() {
  const navigate = useNavigate();

  return (
    <main className="bg-gray-100">
      <nav className="bg-black text-white p-4 shacdow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-xl font-bold">
            <button onClick={() => navigate('/')}>A.D.A. Consulting</button>
          </div>

          <div className="flex space-x-4">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/industries" className="hover:text-gray-300">Industries</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
            <Link to="/careers" className="hover:text-gray-300">Careers</Link>
          </div>

        </div>
      </nav>

    <img src="/ADA.jpg" alt="ADA Logo" className="w-100 h-auto mx-auto" />

    <div className="min-h-screen bg-gray-100 p-8">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </div>

    
      
    </main>
  );
}

export default App;
