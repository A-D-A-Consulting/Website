import "./App.css";

// eslint-disable-next-line
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
            <ScrollLink to="logo" smooth={true} duration={500} className="hover:text-gray-300"><Link to="/">Home</Link></ScrollLink>
            <ScrollLink to="logo" smooth={true} duration={500} className="hover:text-gray-300"><Link to="/about">About</Link></ScrollLink>
            <ScrollLink to="logo" smooth={true} duration={500} className="hover:text-gray-300"><Link to="/industries">Industries</Link></ScrollLink>
            <ScrollLink to="logo" smooth={true} duration={500} className="hover:text-gray-300"><Link to="/contact">Contact Us</Link></ScrollLink>
            <ScrollLink to="logo" smooth={true} duration={500} className="hover:text-gray-300"><Link to="/careers">Careers</Link></ScrollLink>
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
            A.D.A. meets your business needs.
          </h1>
          <div className="flex gap-4">
            
              <button className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition">
                <ScrollLink to="logo" smooth={true} duration={500}>
                  Learn More
                </ScrollLink>
              </button>
            
          </div>
        </div>
      </div>


    <Element name="logo">
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

      
      <footer className="bg-black text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">About Us</h3>
            <img src="/ADA.jpg" alt="ADA Logo" className="w-20 h-auto mx-auto" /><br/>
            <p className="text-sm text-gray-300">
              ADA is a leading consulting firm focused on business transformation and innovation.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><ScrollLink to="logo" smooth={true} duration={500} className="hover:underline"><Link to="/">Home</Link></ScrollLink></li>
              <li><ScrollLink to="logo" smooth={true} duration={500} className="hover:underline"><Link to="/about">About</Link></ScrollLink></li>
              <li><ScrollLink to="logo" smooth={true} duration={500} className="hover:underline"><Link to="/industries">Industries</Link></ScrollLink></li>
              <li><ScrollLink to="logo" smooth={true} duration={500} className="hover:underline"><Link to="/contact">Contact</Link></ScrollLink></li>
              <li><ScrollLink to="logo" smooth={true} duration={500} className="hover:underline"><Link to="/careers">Careers</Link></ScrollLink></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-300">Email: adalon@ada-consulting.net</p>
            <p className="text-sm text-gray-300">Phone: (408) 799-2607</p>
            <p className="text-sm text-gray-300">Address: 2963 Bowery Lane San Jose, California 95135</p>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400 py-4 border-t border-gray-700">
          &copy; {new Date().getFullYear()} A.D.A. Consulting. All rights reserved.
        </div>
      </footer>

    </main>
  );
}

export default App;
