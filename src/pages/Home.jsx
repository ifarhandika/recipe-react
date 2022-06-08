import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {
  const [randomRecipes, setRandomRecipes] = useState([])
  useEffect(() => {
    getRandomRecipes()
  }, [])

  const getRandomRecipes = async () => {
    await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6`
    )
      .then((res) => res.json())
      .then((data) => setRandomRecipes(data.recipes))
  }

  return (
    <>
      <div className="grid justify-items-center content-between grid-cols-1 gap-7 mb-8 sm:grid-cols-2">
        {randomRecipes.map((recipe) => {
          return (
            <div key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <img
                  src={recipe.image}
                  alt="recipe"
                  className="hover:opacity-75"
                />
                <h3 className="pt-2 pb-10 fonts text-2xl">{recipe.title}</h3>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Home
