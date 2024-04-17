import React, { useEffect, useState } from "react"



export default function Valasz({adat}){
    const [teszt, setTesztz] = useState();



return(
    <>
         <div>{adat.kerdes}
        <div>{adat.v1}</div>
        <div>{adat.v2}</div>
        <div>{adat.v3}</div>
        <div>{adat.v4}</div>
        {adat.helyes === adat.v1} 
        </div>
    </>
)

}