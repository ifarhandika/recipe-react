import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const Searched = () => {
  const [searchedRecipes, setSearchRecipes] = useState([])

  let params = useParams()

  const getSearchRecipes = async (search) => {
    await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}`
    )
      .then((res) => res.json())
      .then((data) => setSearchRecipes(data.results))
  }
  useEffect(() => {
    getSearchRecipes(params.search)
  }, [params.search])

  return (
    <>
      <h1 className="fonts text-3xl mb-5">Results</h1>
      <div className="grid justify-items-center content-between grid-cols-5 gap-7 mb-8 sm:grid-cols-5">
        {searchedRecipes.map((recipe) => {
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

export default Searched
