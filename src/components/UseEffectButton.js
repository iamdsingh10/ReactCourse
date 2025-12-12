import { useState } from "react";
import UseEffectExample from "./UesEffect";

function UseButton(){
    const [name,setName]= useState('kuntal');
    return<>
    <UseEffectExample name={name} />

    <button  onClick={()=>{
        setName('ruchi')
    }} >Update Name</button>
    </>
}

export default UseButton;