import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Career from "./components/Career";

function App() {
  return (
    <div className="h-screen bg-gradient-to-t from-blue-500 to-white relative">
      <BrowserRouter>
        <div className="flex absolute inset-0 m-auto rounded-2xl border-solid bg-white items-center justify-center w-[1200px] h-[720px] shadow-2xl">
          <NavBar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
