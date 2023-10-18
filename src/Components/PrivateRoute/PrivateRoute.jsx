import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <div>Loading....</div>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/signin"} state={{ from: location }}></Navigate>;
};

export default PrivateRoute;