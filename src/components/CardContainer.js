import { CardWithTitle } from "./Card";

export default function CardContainer({persons}){
    return <div>
        <h2>List of Person</h2>
        <div>{persons.map(({id,items,status}))=>{
            <CardWithTitle title={items}>
                <div>id:{id}</div>
                <div>status:{status}</div>
            </CardWithTitle>
        }
        }</div>
    </div>

}