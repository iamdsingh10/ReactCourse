import { useState } from "react";
//import { CardWithTitle } from "./Card";
import Person from "./Persons";
import Search from "./Search";

function Form(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [people, setPeople] = useState([]);
    const [query, setQuery] = useState('');
    return<>
    <div>
    <form  method="GET" action='#'  onSubmit={(e)=>{
        e.preventDefault();
        setName("");
        setEmail("");
        console.log(name, email)
        setPeople((lastPeopleValue)=>{
            return [
                ...lastPeopleValue,
                {
                    name,
                    email
                }
            ]
        })
    }}>
        <div>
            <label for="name">Name: </label>
            <input id="name" type="text"  value={name}  onChange={(e)=>{  // value is name so that it will sync with state
                setName(e.target.value)
            }} />
        </div>
        <div>
            <label for="email">Email: </label>
            <input id="email" type="email"  value={email}  onChange={(e)=>{
                setEmail(e.target.value)
            }} />
        </div>
        <div>
            <button type="submit">Add</button>
        </div>
    </form>
    <div>
        My name is-- {name}  and my email Id is -- {email}
    </div>
    {/* <div  className="card-container" >
        {
            people.map(({name,email}, index)=>{
                return <CardWithTitle title={name}>
                    {index+1}
               <div>Name: {name}</div>
               <div>Email: {email}</div>
        </CardWithTitle>
            })
        
}
    </div> */}
<Person personList={people.filter(({name, email})=>{
    return name.includes(query)
})}/>
<hr/>
<div style={{ fontWeight: 'bold'}}>Search Functionality</div>
{/* {(people.length > 1) &&        //  i want search appear when there is more than 2 cards
{/* <Search  onSearch={(q)=>{
setQuery(q)
}} /> */} 
{(people.length > 1) && <Search query={query} setQuery={setQuery}/>

} 


    </div>
    
    </>
}

export default Form;