import { useEffect } from "react";

function UseEffectExample({name}){

useEffect(()=>{
    console.log('hey i am useeffect');
})

    return<>
    
    <div>hello from useeffect== {name}</div>
    </>
}

export default UseEffectExample;