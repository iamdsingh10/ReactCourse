import { useState } from 'react';
import './FormValidation.css';


// just keeping debouncing thing outside the component
const debounceDelay= 1000;
    let debounceTimer = null;
    

    // this is for debouncing
    const logWithDebounce = (key,val)=>{
        if(debounceTimer !== null){
            clearTimeout(debounceTimer);    // it is like cancelling the schedule
            debounceTimer= null;
            debounceTimer= setTimeout(()=>{    // it is like setting up the timeouts
console.log(val);
        }, debounceDelay)
        }else{
            debounceTimer= setTimeout(()=>{    // it is like setting up the timeouts
console.log(val);
        }, debounceDelay)
        }
        
       // console.log(formData[key]);   /// this is calling api by every stroke
    }


function FormValidation(){

    

    const [formData, setFormData] = useState({
        name:'',
        email:'',
        mobile: ''
    })

    const [errorObj, setErrorObj] = useState('');   // this is for error validation

    const validatorMethods = {
        name: (key,val) => {
            if(/[0-9]/.test(val)){
                setErrorObj((errorObj)=>{
                    return{
                        ...errorObj,
                        [key]: 'you cannot have numbers in it '
                    }
                })
                console.log(errorObj);
            }else{
                setErrorObj((errorObj)=>{
                    return{
                        ...errorObj,
                        [key]: null
                    }
                })
            }
        },
        email: (key,val)=>{
            if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)){
                setErrorObj((errorObj)=>{
                    return{
                        ...errorObj,
                        [key]: 'you cannot have numbers in it '
                    }
                })
                console.log(errorObj);
            }else{
                setErrorObj((errorObj)=>{
                    return{
                        ...errorObj,
                        [key]: null
                    }
                })
            }
        },
        mobile: (key,val)=>{
            if(!/^\d{10}$/.test(val)){
                setErrorObj((errorObj)=>{
                    return{
                        ...errorObj,
                        [key]: 'you cannot have alphabets in it '
                    }
                })
                console.log(errorObj);
            }else{
                setErrorObj((errorObj)=>{
                    return{
                        ...errorObj,
                        [key]: null
                    }
                })
            }
        }
    }

//     const debounceDelay= 1000;
//     let debounceTimer = null;
    

//     // this is for debouncing
//     const logWithDebounce = (key,val)=>{
//         if(debounceTimer === null){
//             debounceTimer= setTimeout(()=>{    // it is like setting up the timeouts
// console.log(val);
//         }, debounceDelay)
//         }else{
//             clearTimeout(debounceTimer);    // it is like cancelling the schedule
//             debounceTimer= null;
//         }
        
//         console.log(formData[key]);   /// this is calling api by every stroke
//     }


// this is how i am going to handle all the keys
    const inputChangeHandler=(key)=>{  // key passed
        return (e)=>{ // whatever change is happening
            const val = e.target.value
setFormData(data=>{  // updating the state
    return {
        ...data,
        [key] : val
    }
})
logWithDebounce(key,val)
validatorMethods[key](val);    // after optimizing onChange it is also changing the value and validating too
        }
    }


    return<>
    <div className="form-container" >
        <form action='https://www.google.com/submit-form' method="POST" onSubmit={(e)=>{
            e.preventDefault();
            console.log(formData);
            setFormData({    // to clean up the input field after submission
                name:'',
                email: "",
                mobile:""
            })
        }} >
            <h2>Fill The Details</h2>

            <div className="field-container" >
            <label>Name: </label>
            <input type="text" placeholder="type your Name"
            // onChange={(e)=>{setFormData({
            //     ...formData,
            //     name: e.target.value
            // })}}

            onBlur={()=>{
                //validatorMethods[key] && validatorMethods[key](key, val);
                validatorMethods[formData.name] && validatorMethods[formData.name]('name', formData.name)
            }}
            onChange={inputChangeHandler('name')} 
            value={formData.name}
            required />
            </div>

            <div className="field-container" >
            <label>Email: </label>
            <input type="email" placeholder="type your Email" 
            // onChange={(e)=>{
            //     setFormData({
            //         ...formData,
            //         email: e.target.value
            //     })
            // }}
            onChange={inputChangeHandler('email')}
            value={formData.email}
            required />
            </div>

            <div className="field-container" >
            <label>Mobile No: </label>
            <input type="number" placeholder="type your Number " 
            // onChange={(e)=>{
            //     setFormData({
            //         ...formData,
            //         mobile: e.target.value
            //     })
            // }}
            onChange={inputChangeHandler('mobile')}
            value={formData.mobile}
            required />
            </div>

            <div>
            <button type='submit' >Submit</button>
            </div>

        </form>
    </div>
    </>
    
}

export default FormValidation