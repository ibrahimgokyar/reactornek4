import axios from "axios";

export const UlkeleriGetir = () => (dispatch) => {
   
    dispatch({type : "ULKELERI_GETIR_BASLAT"});
    console.log("ülkeleri getir çağrıldı");
    axios.get("https://restcountries.com/v2/all")
    .then((response)=> {
        //console.log("gelen ülkeler" +response.data);
        dispatch({type: "ULKELERI_GETIR_BASARILI",payload : response.data})
    }).catch((error)=> {
        dispatch({type:"ULKELERI_GETIRIRKEN_PROBLEM_OLDU",payload :error})
    })
}