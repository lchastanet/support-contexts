import { useContext } from "react"

import CurrentHousesContext from "../contexts/housesContext"

import HouseCard from "./HouseCard"

function HouseList() {
  const { housesToRent } = useContext(CurrentHousesContext)

  return (
    <>
      <h2>HouseList</h2>
      {housesToRent.map((house) => (
        <HouseCard key={house.name} house={house} />
      ))}
    </>
  )
}

export default HouseList
