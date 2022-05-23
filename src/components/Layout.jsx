import Header from "./Header"
import Footer from "./Footer"
import HouseList from "./HouseList"

import { CurrentHousesContextProvider } from "../contexts/housesContext"

function Layout() {
  return (
    <main>
      <CurrentHousesContextProvider>
        <Header />
        <HouseList />
      </CurrentHousesContextProvider>
      <Footer />
    </main>
  )
}

export default Layout
