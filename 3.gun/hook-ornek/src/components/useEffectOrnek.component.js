import {useState,useEffect} from "react";

function UseEffectOrnek() {

const[usersArray,setData] = useState([]);

   const getirecekFonksiyon = async() => {
        const gelenData = await fetch("https://jsonplaceholder.typicode.com/users");
        if(gelenData.ok) {
            //console.log(gelenData);
            const gelenJson = await gelenData.json();
            setData(gelenJson);
        }

    }
useEffect(()=> {
 
    getirecekFonksiyon();
},[])

return(
    <div>
     <ul>
        {usersArray.map((item) => (
            <li key={item.id}>{item.username} - {item.email}</li>
        ))}
     </ul>
    </div>
)
}

export default UseEffectOrnek;