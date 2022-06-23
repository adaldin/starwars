import { Navigate, Outlet } from "react-router-dom";
import Home from "../../pages/Home";
// Aquesta funcion debe tomar valores local storage
const useAuth = () => {
  return true;
};

function ProtectedRoute() {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="login" />; //Aquí página para loguearte
}

export default ProtectedRoute;
