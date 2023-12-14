import { LOGIN_SUCCESS,LOGIN_ERROR,LOGOUT } from "../actions/authAction";

const initState = {
    isAuthenticated : false,
    error : false,
    username:'',
    errorMessage : ''
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                username :action.username,
                isAuthenticated : true,
                error : false,
                errorMessage :''
            };
            case LOGIN_ERROR:
            return {
                ...state,
                username :'',
                isAuthenticated : false,
                error : true,
                errorMessage :action.error
            };
            case LOGOUT:
                return {
                    username:''
                };
                default :
                return state;
    }
}
export default authReducer;