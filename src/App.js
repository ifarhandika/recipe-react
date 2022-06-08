import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"

import Home from "./pages/Home"
import RecipeDetails from "./pages/RecipeDetails"
import Searched from "./pages/Searched"

function App() {
  return (
    <>
      <Router>
        <div className="wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:search" element={<Searched />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
