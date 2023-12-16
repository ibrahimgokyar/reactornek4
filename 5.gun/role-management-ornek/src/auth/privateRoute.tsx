import {Navigate, useLocation} from "react-router-dom";
import useAuth from "./useAuth";

interface IPrivateProps {
    children?: React.ReactNode;
    roles?:string[];
}

const PrivateRoute = ({children, roles} : IPrivateProps) => {

    const {isAuthenticated, isAllow} = useAuth({roles});
    const location = useLocation();
    if(!isAuthenticated ) {
        return <Navigate to= {"/login"} replace state={{location}} />;
    }
    return <>
    {isAllow ? children : <div>Bu sayfayı görüntüleyemezsiniz</div>}
    </>
}
export default PrivateRoute;