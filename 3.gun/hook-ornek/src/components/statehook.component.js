import {useState} from "react";
function StateHook() {
    const[adet,adetiAta] = useState(0);

    const abc = () => adetiAta(adet+1)


    return(
        <div>
            <p>{adet} kere tıkladınız</p>
            <button onClick={abc}>Tıkla</button>
        </div>
    )
}

export default StateHook;