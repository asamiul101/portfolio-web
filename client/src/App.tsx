import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Career from "./components/Career";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <div className="h-screen bg-gradient-to-t from-blue-500 to-white relative">
      <BrowserRouter>
        <div className="flex flex-col absolute inset-0 m-auto rounded-2xl border-solid bg-white w-[1200px] h-[720px] shadow-2xl">
          <NavBar />
          <div className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/career" element={<Career />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
