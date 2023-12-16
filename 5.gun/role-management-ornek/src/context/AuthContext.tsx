import { createContext,useState,ReactNode} from "react";
import {useLocation,useNavigate} from "react-router-dom";
import {getToken,setTokenToCookie} from "../util/tokenUtil";


interface IAuthProps {
    children: ReactNode;
  }

const AuthContext = createContext( {
    token :"",
    onLogin : (token: string) => {},
    onLogout :() => {},
});
const AuthProvider = ({children } : IAuthProps) => {

    const navigate = useNavigate();
    const location = useLocation();
    const [token,setToken] = useState(getToken() || "")
    const handeLogout= () => {
        setToken("");
        setTokenToCookie("");
    }

    const handleLogin = (token : string ) => {
        setToken(token);
        setTokenToCookie(token);
        var returnPath = Object.values(location.state as Location) ;
        navigate(returnPath[0].pathname || "/admin");
    }
    const value = {
        token,
        onLogout : handeLogout,
        onLogin : handleLogin,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    
}


export {AuthContext,AuthProvider}