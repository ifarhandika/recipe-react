import React from "react"
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center py-10">
        <div>
          <Link to={"/"}>
            <h1 className="fonts text-3xl">Delicious</h1>
          </Link>
        </div>
        <SearchBar />
      </div>
    </>
  )
}

export default Header
