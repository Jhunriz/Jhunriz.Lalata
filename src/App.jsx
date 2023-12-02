import { useState } from "react";
import "./App.css";
import Navbar from "./Layout/Navbar";
import MainContent from "./Layout/MainContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
