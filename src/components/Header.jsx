import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import SearchBar from "./SearchBar"

const Header = () => {
  const navigate = useNavigate()

  const [inputSearch, setInputSearch] = useState("")

  const submitSearchHandler = (e) => {
    e.preventDefault()
    navigate(`search/${inputSearch}`)
  }
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
