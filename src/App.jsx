import "./App.css";
import Button from "./components/Button";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Industries from "./pages/Industries.jsx";
import Contact from "./pages/Contact.jsx";
import Careers from "./pages/Careers.jsx";

function App() {
  return (
    <main className="flex justify-center gap-4 flex-col min-h-screen">

      

    <Router>
      <div className="min-h-screen bg-gray-100 p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </div>
    </Router>
      
    </main>
  );
}

export default App;
