import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import RootLayout from "./RootLayout";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  // return isAuthenticated ? <Outlet /> : <Navigate to="/landing" />;
  return isAuthenticated ? <RootLayout /> : <Navigate to="/landing" />;
};
export default ProtectedRoute;
