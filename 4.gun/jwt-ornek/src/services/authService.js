import axios from 'axios';
import { setAuthorizationToken } from '../helpers/setAuthorizationToken';


const login = (username,password) => {
    return axios.post("http://85.159.71.66:80/login", {username,password})
    .then(gelenToken => {
        console.log(gelenToken.data);
      //  const {token} = gelenToken.data;
        localStorage.setItem("jwt_token", gelenToken.data);
        setAuthorizationToken(gelenToken.data);
        return gelenToken.data;
    })
    .catch(error => console.error(error));
}

const logout = () => {
    localStorage.removeItem("jwt_token");   
    setAuthorizationToken(false);
}
export default {login, logout}