import { useState } from "react";

function Search({query, setQuery}){
//const [query, setQuery] = useState('');    if we are passing the state from parents component 
    return <>
    <div>
        <label>Search:</label>
        {/* <input type="text" value={query}   onChange={(e)=>{
            setQuery(e.target.value)
            onSearch(query)
        }}/> */}
        <input type="text" value={query} 
        onChange={(e)=>{
            setQuery(e.target.value);
            
        }}
        />
    </div>
    
    </>
}

export default Search;