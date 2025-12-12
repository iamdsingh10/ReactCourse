import { useState } from "react";
import { GoogleButton } from "./Buttons";

function Click(){


    const clickHandler = (str)=>{
    return () => {
        alert(str)
    }
}


    return <>
    <GoogleButton  onClick={clickHandler('hello world')} >Click Me</GoogleButton>
    </>
}


export default Click;