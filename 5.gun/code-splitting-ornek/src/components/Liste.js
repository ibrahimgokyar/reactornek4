const arr = [1,2,3,4,5,6,7,8,9,10,11,12 ]

const Liste=()  =>{
    return(
        <div>
         <ul>
            {arr.map((item)=> {
                return(
                    <li key={item}>
                        {item}
                    </li>
                )
            })}
         </ul>
        </div>
    )
}
export default Liste;