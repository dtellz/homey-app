import useAuth from "../../custom-hooks/useAuth.js";
import { Navigate } from "react-router";


function PrivateRoute({ children }) {
    const auth = useAuth();
    return auth ? children : <Navigate to="/login" />;
}

export default PrivateRoute;