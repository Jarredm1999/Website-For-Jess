import React from "react";
import "./css/App.css";
import Home from "./pages/Home";
import Photos from "./pages/Photos";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { CardProvider } from "./context/CardContext";

function App() {
  return (
    <CardProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Photos" element={<Photos />} />
        </Routes>
      </main>
    </CardProvider>
  );
}

export default App;
