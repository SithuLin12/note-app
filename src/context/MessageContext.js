import React, { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const MessageContext = createContext();


export const MessageContextProvider = (props) => {

    const [message,setMessage] = useState({});

    useEffect(()=>{

        if(message.type === 'success'){
            toast.success(message.message)
        }else{
            toast.error(message.message)
        }
    })

    return (

        
        <MessageContext.Provider value={{message:message ,setMessage:setMessage}}>
            {props.children}
            <ToastContainer/>
        </MessageContext.Provider>
    )
}

export default MessageContext 