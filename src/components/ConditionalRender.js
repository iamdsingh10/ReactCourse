import { useState } from "react";
import '../App.css';


function LessThanTen({count}){
    return <div>
        Hey there! why it is so less {count}
    </div>
}

function GreaterThanTen({count}){
    return <div>
        Hey there! that's what the number should be {count}
    </div>
}

export default function ConditionalExample(){
    const [counter, setCounter]= useState(0);

    return <>
    {
        counter < 10 ?
        <LessThanTen count={counter}/> : <GreaterThanTen count={counter}/>
    }
    <div   className={counter < 10 ? 'text-red' : 'text-green'} >The value of counter is - {counter} </div>
    <div>
        <button    onClick={()=>setCounter((c)=> c+1)}>Increament By 1</button>
    </div>
    </>
}