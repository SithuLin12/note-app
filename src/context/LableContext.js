import React, { createContext, useEffect, useState } from 'react'
import ax from '../api/ax';

const LableContext = createContext();

export const LableContextProvider = (props) => {

    const [loader,setLoader] = useState(true)
    const [lable,setLable] = useState([]);
    const [selectLable,setSelectLable] = useState(null)
    const token = localStorage.getItem('token');

    useEffect(()=>{
        ax.get('/category', {headers : { Authorization : "Bearer " + token }}).then((d) => {
            console.log(d.data);
            const {data} = d.data;
            setLable(data);
            setLoader(false);
        })
    },[])

    return (
        <LableContext.Provider value={{lable,setLable,loader,selectLable,setSelectLable}}>
            {props.children}
        </LableContext.Provider>
    )
}

export default LableContext

 