import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
function App() {
  return (
    <div className="App">
      <header className="App-header">This is a demo site</header>
      <Navigation />
      <Routes>
        <Route path="blog" element={<Blog />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
