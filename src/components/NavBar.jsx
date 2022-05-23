import { useContext } from "react"

import CurrentHousesContext from "../contexts/housesContext"

function NavBar() {
  const { setHousesToRent, housesToRentData } = useContext(CurrentHousesContext)

  const handleChange = (e) => {
    const newList = housesToRentData.filter(
      (house) => house.type === e.target.value || e.target.value === "All"
    )
    setHousesToRent(newList)
  }

  return (
    <nav>
      <h1>NavBar</h1>
      <select name="home" onChange={handleChange}>
        <option value="All">All</option>
        <option value="Flat">Flat</option>
        <option value="House">House</option>
      </select>
    </nav>
  )
}

export default NavBar
