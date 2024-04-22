import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom";


const Operator = ({children}) => {
  const {user} = useSelector(store => store.Auth)
  const navigator = useNavigate()

  if(user && user?.Role === "Operator")
    return children;
  else
    return <Navigate to={'/accessError'} />
}

export default Operator