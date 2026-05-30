import { useEffect } from "react";

export default function Greeting   (){

     let time = window.location.search.split('=')[1];
   
    // useEffect(()=>{
    //     window.location.search
    // })

    return time === 'morning'? 'Good morning' : 'Good night';
}