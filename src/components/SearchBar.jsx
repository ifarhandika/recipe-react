import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { FaSearch } from "react-icons/fa"

const SearchBar = () => {
  const navigate = useNavigate()

  const [inputSearch, setInputSearch] = useState("")

  const submitSearchHandler = (e) => {
    e.preventDefault()
    navigate(`search/${inputSearch}`)
    setInputSearch("")
  }

  return (
    <>
      <div className="w-80 ml-5">
        <form onSubmit={submitSearchHandler}>
          <div className=" flex justify-between items-center shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight ">
            <FaSearch></FaSearch>
            <input
              className="w-full ml-3 focus:outline-none focus:shadow-outline"
              type="text"
              autoComplete="off"
              placeholder="Search for Recipe"
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default SearchBar
