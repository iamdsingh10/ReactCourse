import { CardWithTitle } from "./Card";

function Person({personList}){
    return<>
    <div  className="card-container" >
        {
           
            personList.map(({name, email},index)=>{
                return <CardWithTitle title={name}>
                    {index+1}
                    <div>Name: {name}</div>
                    <div>Email: {email}</div>
                </CardWithTitle>
            })
        
}
    </div>
    </>
}

export default Person;