import { useContext } from "react";
import { AuthContext } from "./Context/AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { users, loading } = useContext(AuthContext);
  if (loading) {
    return <div>Loading....</div>;
  }
  if (users) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
};

export default PrivateRoute;