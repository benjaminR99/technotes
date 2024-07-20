import { Navigate, useLocation ,Outlet } from "react-router-dom"
import useAuth from "../../hooks/useAuth" ;


const ReqAuth = ({ allowedRoles }) => {
  console.log("Req auth")
  const location = useLocation();
  const { roles } = useAuth();
  console.log(roles) ; 

  let content = roles.some(role => allowedRoles.includes(role))
      ? <Outlet />
      : <Navigate to="/login" state={{ from: location }} replace />;

  return content;
}

export default ReqAuth;
