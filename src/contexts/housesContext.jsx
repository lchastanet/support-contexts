import { createContext, useState } from "react"

import housesToRentData from "../data/housesToRent"

const CurrentHousesContext = createContext()

export const CurrentHousesContextProvider = ({ children }) => {
  const [housesToRent, setHousesToRent] = useState(housesToRentData)

  return (
    <CurrentHousesContext.Provider
      value={{ housesToRent, setHousesToRent, housesToRentData }}
    >
      {children}
    </CurrentHousesContext.Provider>
  )
}

export default CurrentHousesContext
