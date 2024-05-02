import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const IsLoggedIn = ({children}) => {
  const {user} = useSelector(store => store.Auth)

  if(user)
    return children;
  else
    return (
    <div>
        <Navigate to={'/login'} />
        {toast.error("Please Login First",{position:'top-center',autoClose:2000,hideProgressBar:true,closeButton:false})}
    </div>
  )
}

export default IsLoggedIn