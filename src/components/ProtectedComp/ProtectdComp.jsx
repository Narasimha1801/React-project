import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
const ProtectedComp = ({ children }) => {
  const jwt_token = Cookies.get("jwt_token");
  if (jwt_token === undefined) {
    return <Navigate to={"/login"} />;
  }
  return children;
};
export default ProtectedComp;
