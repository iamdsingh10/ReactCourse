import { Component } from "react"

// class component

class Car extends Component{

    //fan='123'
items=[{
    name: 'audi',
    price: 10000
},
{
    name: 'bmw',
    price: 20000
},
{
    name: 'merc',
    price: 30000
}
]

    constructor(){
        super()
        //this.love= 'family'
    }

    state = {
        name: 'deepak',
        city: 'darjeeling'
    }
 getItemPrice(price){
     return price > 15000 ? 'expensive' : 'cheap';
 }

getItemContent(items){
    return `hey i am ${items.name} which is ${this.getItemPrice(items.price)}`
}

    render(){
        return<>
        <div>hye my name is {this.state.name} and i am from {this.state.city} --------------- <button onClick={()=>{
            this.setState({
               // name: 'deelip',
               ...this.state,
                city: 'bangalore'
            })
        }} >update Data</button></div>
       
        {
        this.items.map((items,index) => {
            return <div> {index +1}. {this.getItemContent(items)}</div>
        })
    }
        </>
    }
}

export default Car;