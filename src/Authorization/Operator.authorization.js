import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";


const Operator = ({children}) => {
  const {user} = useSelector(store => store.Auth)

  if(user.Role === "Operator")
    return children;
  else
    return <Navigate to={'/accessError'} />
}

export default Operator