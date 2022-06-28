import React, { useContext } from "react"
import { Link } from "react-router-dom"

import FavoriteContext from "../context/FavoriteContext"

const Favorites = () => {
  const { recipes } = useContext(FavoriteContext)
  return (
    <>
      <h1 className="fonts text-3xl mb-5">Favorites</h1>
      <div className="grid justify-items-center content-between grid-cols-5 gap-7 mb-8 sm:grid-cols-5">
        {recipes.map((recipe) => {
          return (
            <div key={recipe.recipe.id}>
              <Link to={`/recipe/${recipe.recipe.id}`}>
                <img
                  src={recipe.recipe.image}
                  alt="recipe"
                  className="hover:opacity-75"
                />
                <h3 className="pt-2 pb-10 fonts text-2xl">
                  {recipe.recipe.title}
                </h3>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Favorites
