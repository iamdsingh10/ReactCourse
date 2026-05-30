import { useEffect, useState } from 'react';
import './FormValidation.css';
import{useEffect, useState} from 'react';
import { getPersons } from './apiutils';
import { CardWithTitle } from './Card';
import CardContainer from './CardContainer';

function AssignmentForm(){
    const [userName, setUserName]= useState('');
    const [person,setPerson]= useState([]);

useEffect(()=>{
getPersons()
.then(personList) => {
    setPerson(personList);
}
},[])

    return<div className='container' >
      <Form   onSubmit={(data)=>{
console.log('Form data', data);
      }}/>
      <CardContainer persons = {person}/>

</div>
        }