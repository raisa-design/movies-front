//import { useState } from 'react'
import Search from "./pages/Search";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
