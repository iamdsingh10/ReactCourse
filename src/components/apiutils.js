const BASE_URL = 'http://localhost:3000/';

const getPersons = ()=>{
    return fetch(`${BASE_URL}/persons`)
    .then(res => res.json());
}

export {
    getPersons
}