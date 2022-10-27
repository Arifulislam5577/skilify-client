import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Loader from "../components/Loader";
import { DataContext } from "../context/context";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(DataContext);
  if (loader) {
    return <Loader />;
  } else {
    return user ? children : <Navigate to="/login" />;
  }
};

export default PrivateRoute;
