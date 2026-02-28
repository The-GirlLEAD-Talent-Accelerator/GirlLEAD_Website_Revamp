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
}

export default App;
