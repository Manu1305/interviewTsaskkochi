import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      {/* <Home/> */}
      {/* <Login /> */}
    </>
  );
}

export default App;
