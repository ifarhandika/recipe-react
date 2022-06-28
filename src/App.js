import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"

import Home from "./pages/Home"
import RecipeDetails from "./pages/RecipeDetails"
import Searched from "./pages/Searched"
import Favorites from "./pages/Favorites"
import { FavoriteProvider } from "./context/FavoriteContext"

function App() {
  return (
    <>
      <FavoriteProvider>
        <Router>
          <div className="wrapper">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search/:search" element={<Searched />} />
              <Route path="/recipe/:id" element={<RecipeDetails />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </div>
        </Router>
      </FavoriteProvider>
    </>
  )
}

export default App
