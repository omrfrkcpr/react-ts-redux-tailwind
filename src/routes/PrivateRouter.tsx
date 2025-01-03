import { Navigate } from "react-router-dom";

const isAuthenticated = true; // Example for authentication

const PrivateRouter: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRouter;
