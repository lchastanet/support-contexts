import { createContext } from "react"

import housesToRent from "../data/housesToRent"

const CurrentHousesContext = createContext()

export const CurrentHousesContextProvider = ({ children }) => {
  return (
    <CurrentHousesContext.Provider value={{ housesToRent }}>
      {children}
    </CurrentHousesContext.Provider>
  )
}

export default CurrentHousesContext
