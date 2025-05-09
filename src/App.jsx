import "./App.css";
import Button from "./components/Button";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <main className="flex justify-center gap-4 flex-col min-h-screen">

      

    <Router>
      <div className="min-h-screen bg-gray-100 p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
      
    </main>
  );
}

export default App;
