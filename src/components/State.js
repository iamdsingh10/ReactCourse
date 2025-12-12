import { useState } from "react";

//const [name, setName]=useState('bholu');


function getItemPrice(price){
    return price > 5000 ? 'exp': 'cheap';
}
function getItemName(items){
    return `hye i am ${items.name} which is ${getItemPrice(items.price)} `
}

function State({items}){
    const [name, setName]=useState('bholu');
    console.log(items)
    return <>
    <div>my name is {name}</div>

    {
items.map((carItems,index)=>{
    return <div>{index+1}. {getItemName(carItems)}</div>
})
    }
   <button onClick={()=>{
    setName('deepak')
   }} >Update the name</button>
    
    </>
}

export default State;