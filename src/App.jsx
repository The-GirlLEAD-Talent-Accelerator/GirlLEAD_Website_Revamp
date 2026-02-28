import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import './App.css'

function App() {
  return (
    <>
      <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col">
        <div className="h-[7vh]">
          <Navbar />
        </div>
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </main>
    </>
  )
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Programs from "./pages/Programs";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
