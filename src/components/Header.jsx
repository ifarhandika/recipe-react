import React, { useContext } from "react"
import { Link } from "react-router-dom"

import SearchBar from "./SearchBar"

import { FaStar } from "react-icons/fa"
import FavoriteContext from "../context/FavoriteContext"

const Header = () => {
  const { recipes } = useContext(FavoriteContext)
  
  return (
    <>
      <div className="flex justify-between items-center py-10">
        <div>
          <Link to={"/"}>
            <h1 className="fonts text-3xl">Delicious</h1>
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <Link to={"/favorites"}>
            <div className="flex justify-between items-center">
              <FaStar className="mr-1" />
              <span>{recipes.length}</span>
            </div>
          </Link>
          <SearchBar />
        </div>
      </div>
    </>
  )
}

export default Header
