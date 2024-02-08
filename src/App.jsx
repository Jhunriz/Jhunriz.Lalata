import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Introduction from "./Pages/Introduction";
import MainContent from "./Layout/MainContent";
import Skills from "./Pages/Skills";
import Footer from "./Layout/Footer";
import StyledNavbar from "./Layout/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <StyledNavbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/Introduction" element={<Introduction />} />
          <Route path="/Skills" element={<Skills />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
