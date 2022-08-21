import Navbar from "./Navbar";
import Socials from "./Socials";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Socials />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
