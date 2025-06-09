import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import MangaDetail from "./pages/MangaDetail";
import Navbar from "./components/Navbar";
import './App.css'

function App() {
 

  return (
      
      <BrowserRouter>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/manga/:id" element={<MangaDetail />} />
        </Routes>
      </div>
    </BrowserRouter>


  )
}

export default App
