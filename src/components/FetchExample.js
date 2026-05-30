import { useEffect, useState } from "react"
import { CardWithTitle } from "./Card";

// function that will fetch from server
const initialTodos = [
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
        status: "Inprogress"
    }
]

function getTodoFromServer(callbackFn){

    console.log(`fetching from new server ::  ${new Date().getTime()}`);
    return  new Promise((resolve,reject)=>{
    
    fetch('http://localhost:5000/todos')
        //.then(res=>res.json())
        .then(data=>{
            // now we have the data
            console.log('recieved data',data)
            const a= null
            a.toLowerCase()

        },
        error => {
            console.error('error recieved',error)
        }
    ).catch(err=>{
        console.log('error recieved in catch', err)
        reject(err)
    })
        return undefined     // if not by default it is returned
})}

// function getTodoFromServer() {
//     console.log(`Fetching from the todos server ::${new Date().getTime()}`)
//     fetch(`http://localhost:3000/todos/${id}`)
//     .then(res => res.json())
//     .then(data =>{
//         //how we have thhe data

//     })
//     return undefined
// }

 
function updateTodoToComplete(id){
    return fetch(`http://localhost:5000/${id}`,{   // this part is not supported so we have to create it in server
        method: "POST",   // podt method is used to send the data to server
        headers: {
            'accept': "application/json",    // i am also expecting the data in the form of json
            'contentType': "application/json"   //the type of data i am going to send
        },
        body: JSON.stringify({   // body is basically a data which we want to send to the server
            status: 'complete'
        })
    }).then(res=>res.json())
}


export default function FetchExample(){
const [todos, setTodos]= useState(initialTodos);
// because of this it is calling api whenever it is rendering

// getTodoFromServer()
// .then(todoResponse => {
//     console.log(todoResponse);
// })

// so get rid of again and again api call i used useEffect as component did mount

useEffect(()=>{
    getTodoFromServer()
.then(err => {
    console.log('Error recieved in useEffect',err);
    
})
// const data = getTodoFromServer()
// setTodos(data)   // if data is empty then it is also going to be empty

},[])

// const onMark = (id)=>{
//     setTodos(todos=>{
//         const updateTodos= [...todos]
//         updateTodos.some(todo=>{
//             if(todo.id===id){
//                 todo.status = 'complete';
//                 return true;
//             }
//             return false;

//         })
//         return updateTodos;
//     })
// }

const updateStatusToServer = (id)=>{
    updateTodoToComplete(id)
    .then((res)=>{
        if(res.success){
            alert('updated todo list')
            setTodos(res.todoList)
        }
    })
}

    return<>
    <div className="todo-container" >
        {
            todos.map((todo) =>{
                return <CardWithTitle key={todo.id} title={todo.items} >
                    <div>
                        status: {todo.status}
                    </div>
                    <div style={{marginTop: '20px'}} >
                        <button
                        onClick={()=>{
                           // onMark(todo.id)
                           updateStatusToServer(todo.id)
                        }}
                        >Mark complete</button>
                    </div>
                </CardWithTitle>
            })
        }
    </div>
    </>
}