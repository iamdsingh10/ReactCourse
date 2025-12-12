//import { Component } from "react";
function getItemPrice(price){
    return price >3000 ? 'expensive' : 'cheap'
}

function getItemName(item){
    return ` this is ${item.name} which is ${getItemPrice(item.price)}`;
}

function Cars(){
    const items = [
        {
            name: 'audi',
            price: 20000
        },
        {
            name: 'bmw',
            price: 30000
        },
        {
            name: 'merc',
            price: 40000
        }
    ]

    return <div>
    <div>
    {
        items.map((item,index)=>{
            return <div>{index+1}. {getItemName(item)}</div>
            
        })
    }
    </div>
    </div>
}

export default Cars;
