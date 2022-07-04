import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute(props) {
  return props.auth ? <Outlet /> : <Navigate to="login" />; //Aquí página para loguearte
}

export default ProtectedRoute;
