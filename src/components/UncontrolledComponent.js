import { useRef, useState } from "react"




export default function UncontrolledComponent(){
const [name, setName] = useState("");
const inputRef = useRef(null);

    return <>
    <div>
        <form>
            <div>Here it is a controlled component first</div>
            <label>Name</label>
            <input type="text" onChange={(e)=> setName(e.target.value)}/>
            <div>here it i uncontrolled component</div>
            <label>Email</label>
            <input type="text" id="input-email" ref={inputRef} />
        </form>
        <h2>My name is {name}</h2>
        <h2>My email is {inputRef.current && inputRef.current.value}</h2>
        <button  onClick={()=>alert()} >Get Email</button>
    </div>
    </>
}