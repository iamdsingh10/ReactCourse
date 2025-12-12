function getItemPrice(price){
    return price > 30000 ?  'expensive' : 'cheap';
}

function getItemName(cars){
    return `hey this is ${cars.name} which is ${getItemPrice(cars.price)}`
}

function Props({carItems}){

//console.log(carItems)
    return<>
    {
        carItems.map((items,index)=>{
            return <div>{index+1}. {getItemName(items)}</div>
        })
    }
    </>
}

export default Props;