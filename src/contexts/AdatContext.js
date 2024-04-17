import { createContext, useContext, useEffect, useState } from "react";
import axios from "../api/axios";

const AdatContext = createContext();
export const AdatProvider = ({children})=>{
    const [kategoriaLista, setKategoriaLista] = useState([]);
    const [tesztLista, setTesztLista] = useState([]);

    const getLista = async(vegpont, callBack)=>{
        const {data}= await axios.get(vegpont);
        callBack(data);
    }

    useEffect(()=>{
        getLista("api/kategorias", setKategoriaLista);
        getLista("api/teszts", setTesztLista);
    }, []);

    return(
        <AdatContext.Provider value={{kategoriaLista,tesztLista}}>
            {children}
        </AdatContext.Provider>
    );
}
export default function useAdatContext(){
    return useContext(AdatContext);
}