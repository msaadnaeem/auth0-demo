import Navbar from "../components/navbar"
import { useAuth0 } from "@auth0/auth0-react";

export const Home = () => {
    const {isAuthenticated}=useAuth0()
  return (
   <>
   <Navbar/>
   {!isAuthenticated && <h1>Login to view info</h1>}
   </>
  )
}
export default Home
