import React from 'react'
import Home from './Home/Home'
import { BrowserRouter , Routes, Route } from "react-router-dom";

export default function AppRoute() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
        
            <Route exact path="/" element={<Home />} />
        
        </Routes>
    </BrowserRouter>
    </div>
  )
}
