import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) =>{
    const {user} = useContext(AuthContext)

    if (user && user?.email) {
        return children;
    }


    return <Navigate to={"/login"}></Navigate>
        
};

export default PrivateRoutes;

