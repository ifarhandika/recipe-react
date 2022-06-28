import { createContext, useState } from "react"
import { toast } from "react-hot-toast"

const FavoriteContext = createContext()

export const FavoriteProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([])

  const addToFavorites = (recipe) => {
    // const checkFavorites = recipes.find((item) => item.id === recipe.recipe.id)
    // console.log(checkFavorites)

    setRecipes((prevState) => [...prevState, { recipe }])
    toast.success(`${recipe.title} was added to your favorites`)
  }

  return (
    <FavoriteContext.Provider value={{ recipes, addToFavorites }}>
      {children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteContext
