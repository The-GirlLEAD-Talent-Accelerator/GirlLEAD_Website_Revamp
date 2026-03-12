import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Programs from "./pages/Programs";
import "./App.css";

// 404 Not Found component
function NotFound() {
  return (
    <div className="pt-[7vh] flex items-center justify-center min-h-[calc(100vh-7vh)]">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 text-teal-700 dark:text-teal-400">404</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">Page not found</p>
        <a href="/" className="bg-teal-700 text-white px-6 py-2 rounded-lg hover:bg-teal-800 transition-colors">
          Go back home
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <> 
      <Navbar />
      <main className="min-h-screen bg-bg-white text-text-main pt-[7vh] transition-colors">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;