import React, { useEffect, useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import FavoriteContext from "../context/FavoriteContext"

const RecipeDetails = () => {
  const { addToFavorites } = useContext(FavoriteContext)

  const [recipeDetails, setRecipeDetails] = useState([])
  const [activeTab, setActiveTab] = useState("instructions")
  let params = useParams()

  useEffect(() => {
    getRecipeDetails(params.id)
  }, [params.id])

  const getRecipeDetails = async (id) => {
    await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setRecipeDetails(data))
  }

  const instructionsTabHandler = () => {
    setActiveTab("instructions")
  }
  const ingredientsTabHandler = () => {
    setActiveTab("ingredients")
  }

  return (
    <>
      <Toaster />
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-1">
        <div className="flex justify-center items-center">
          <h2 className="fonts text-4xl mb-3">{recipeDetails.title}</h2>
          {/* <p className="">{details.summary}</p> */}
        </div>
        <div className="flex justify-center items-center">
          <img src={recipeDetails.image} alt="" />
        </div>
      </div>
      <div className="p-0 sm:p-10">
        <div className="w-80 flex justify-between items-center my-10">
          <button
            className={
              activeTab === "instructions"
                ? "fonts active:bg-gray-50 bg-gray-300 hover:bg-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                : "fonts active:bg-gray-50 bg-white hover:bg-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            }
            onClick={instructionsTabHandler}>
            Instructions
          </button>
          <button
            className={
              activeTab === "ingredients"
                ? "fonts active:bg-gray-50 bg-gray-300 hover:bg-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                : "fonts active:bg-gray-50 bg-white hover:bg-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            }
            onClick={ingredientsTabHandler}>
            Ingredients
          </button>
          <button onClick={() => addToFavorites(recipeDetails)}>
            Add to Favorites
          </button>
        </div>

        {activeTab === "instructions" && (
          <div>
            <h3
              dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <div>
            {recipeDetails.extendedIngredients.map((ingredient) => {
              return (
                <li key={ingredient.id} className="leading-7 text-justify">
                  {ingredient.original}
                </li>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}

export default RecipeDetails
