import React from "react";
import "./css/App.css";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Photos" element={<Photos />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
