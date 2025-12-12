import { useEffect, useState } from "react"
import { CardWithTitle } from "./Card";

export default function FetchExample(){
const [todo, setTodo]= useState([]);

const todos = [
    {
        id:1,
        items:"Practise React",
        status: "Pending"
    },
    {
        id:2,
        items:"Having Dinner",
        status: "Pending"
    },
    {
        id:3,
        items:"Attending Lecture",
        status: "Improgress"
    }
]

// useEffect(()=>{
//     getTodoFromServer().then(todoResponse => {
//         setTodo(todoResponse);
//     })
// },[])

    return<>
    <div className="todo-container" >
        {
            todos.map(todo =>{
                return <CardWithTitle key={todo.id} title={todo.items} />
            })
        }
    </div>
    </>
}