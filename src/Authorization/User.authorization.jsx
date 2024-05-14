import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const User = ({children}) => {
  
    const {user} = useSelector(store => store.Auth)

    if(!user)
        return children;
    else if(user && user.Role==="Normal")
        return children;
    else   
        <Navigate to={'/accessError'} />
  
}

export default User


