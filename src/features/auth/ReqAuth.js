import { Navigate, useLocation ,Outlet } from "react-router-dom"
import useAuth from "../../hooks/useAuth" ;


const ReqAuth = ({allowedRoles}) => {
    const location = useLocation()
    const {roles} = useAuth()
    let content = roles.some(role => allowedRoles.includes(role)) ? <Outlet/> : 
    <Navigate to="/login" state={{ from: location }} replace />

  return content
}

export default ReqAuth