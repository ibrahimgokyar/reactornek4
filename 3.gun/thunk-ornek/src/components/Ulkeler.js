import React, {useEffect,useState} from "react";
import { UlkeleriGetir } from "../actions";
import {connect} from "react-redux";

function Ulkeler(props)
{
    const[countries,setCountries] = useState([]);
    useEffect(() => {
        
        props.UlkeleriGetir();
        setCountries(props.gelenUlkelers);
    },[])
    console.log(props);
    return(
        <div>
            <h1>Ülke Listesi</h1>
            {
                countries.map(ulke => {
                    return(
                        <div key={ulke.name}>
                        <h3>{ulke.name}</h3> - {ulke.capital}
                        <p>
                            <img src={ulke.flag} alt={ulke.name} style={{width:"100px",height:"100px"}} />
                        </p>
                        </div>
                    )
                })
            }
        </div>
    )
}


const mapStateToProps = state => {
    return {
       gelenUlkelers: state.ulkelerarray,
       isLoading : state.yukleniyorMu
    }
}
export default connect(mapStateToProps,{UlkeleriGetir})(Ulkeler);