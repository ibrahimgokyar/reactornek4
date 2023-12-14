const INITIAL_STATE = {
    ulkelerarray : [],
    mesaj : "",
    yukleniyorMu : false
}

export const reducer = (state=INITIAL_STATE,action) => {

    switch(action.type) {
        case "ULKELERI_GETIR_BASLAT":
            return {...state,yukleniyorMu:true,message:""};
            case "ULKELERI_GETIR_BASARILI":
                return {...state,ulkelerarray:action.payload,yukleniyorMu:false};
                case "ULKELERI_GETIRIRKEN_PROBLEM_OLDU":
                    return {...state,message:action.payload,yukleniyorMu:false};
                    default :
                    return state;
    }
}