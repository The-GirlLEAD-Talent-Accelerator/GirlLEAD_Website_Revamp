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
