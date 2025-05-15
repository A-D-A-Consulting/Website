import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Link as ScrollLink, Element} from "react-scroll";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Industries from "./pages/Industries.jsx";
import Contact from "./pages/Contact.jsx";
import Careers from "./pages/Careers.jsx";



function App() {
  const navigate = useNavigate();

  return (
    <main className="bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-black text-white p-5 shacdow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-xl font-bold">
            <button onClick={() => navigate('/')}>A.D.A. Consulting</button>
          </div>

          <div className="flex space-x-6">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <ScrollLink to="home" smooth={true} duration={500} className="hover:text-gray-300">Home</ScrollLink>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/industries" className="hover:text-gray-300">Industries</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
            <Link to="/careers" className="hover:text-gray-300">Careers</Link>
          </div>

        </div>
      </nav>

      {/* Video Background */}
      <div className="relative h-screen overflow-hidden">
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="/video.mp4"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to My Website
          </h1>
          <div className="flex gap-4">
            <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded text-white font-semibold shadow-lg transition">
              Get Started
            </button>
            <button className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

    <Element name="home">
    <img src="/ADA.jpg" alt="ADA Logo" className="w-100 h-auto mx-auto" />
    </Element>

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
