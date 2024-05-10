import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom";

const User = ({children}) => {
  
    const {user} = useSelector(store => store.Auth)

    if(user && user?.Role === "Normal")
        return children;
    else
        return <Navigate to={'/accessError'} />
  
}

export default User


