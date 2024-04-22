import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";


const Admin = ({children}) => {
  const {user} = useSelector(store => store.Auth)

  if(user && user?.Role === "Admin")
    return children;
  else
    return <Navigate to={'/accessError'} />
}

export default Admin