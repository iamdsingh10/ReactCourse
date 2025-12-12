//import logo from './logo.svg';
//import './App.css';

import { useState } from "react";
import Car from "./components/Class";
import Cars from "./components/Functional";
import Props from "./components/Props";
import State from './components/State'
import { Button, FaceBookButton, GoogleButton } from "./components/Buttons";
import { Card, CardWithImage, CardWithTitle } from "./components/Card";
import Click from "./components/ClickHandler";
import Form from "./components/Form";
import LifeCycle from "./components/LifeCycle";
import UseEffectExample from "./components/UesEffect";
import UseButton from "./components/UseEffectButton";
import FormValidation from "./components/FormValidation";
import ConditionalExample from "./components/ConditionalRender";
import UncontrolledComponent from "./components/UncontrolledComponent";
import FetchExample from "./components/FetchExample";


function App() {
const items=[
    {
        name: 'bmw',
        price: 20000
    },
    {
        name: 'audi',
        price: 30000
    },
    {
        name: 'merc',
        price: 40000
    }
]
const [carItems,setCarItems]=useState([
    {
        name: 'bmw',
        price: 20000
    },
    {
        name: 'audi',
        price: 30000
    },
    {
        name: 'merc',
        price: 40000
    }
])

// setTimeout( ()=> {
//     setCarItems([
//     {
//         name: 'bmw',
//         price: 20000
//     },
//     {
//         name: 'audi',
//         price: 30000
//     }
// ])},2000)

return <>
<div style={{fontWeight: 'bold'}} >Class Component</div>
<div><Car/></div>
<hr/>
<div style={{fontWeight: 'bold'}} >functional Component</div>
<div><Cars items={carItems} /></div>
<hr/>
<div style={{ fontWeight: 'bold'}}>Passing Data as Props</div>
<div ><Props  carItems={items} /> </div>
<hr/>
<div style={{ fontWeight: 'bold'}}>Using State Hook</div>
<div ><State items={carItems}/></div>
<button onClick={()=>{
    setCarItems([
    {
        name: 'bmw',
        price: 20000
    },
    {
        name: 'audi',
        price: 30000
    }
])}
}>Update Status</button>
<hr/>
<div style={{ fontWeight: 'bold'}}>Buttons , children,Compositions, etc</div>
<div><Button style={{color: 'red'}} dir={'ltr'} >hey I am Normal Button</Button></div>
<div><FaceBookButton style={{color: 'blue'}} dir={'ltr'}  >Hey I am FaceBookButton</FaceBookButton></div>
<div><GoogleButton style={{color: 'green'}} dir={'rtl'} >Hey I am Google Button</GoogleButton></div>
<hr/>
<div><Card/></div>
<hr/>
<div><CardWithImage src='https://w0.peakpx.com/wallpaper/518/289/HD-wallpaper-shahrukh-khan-srk-smile-srk-smile.jpg'>Sharukh</CardWithImage></div>
<hr/>
<div><CardWithTitle title='hye i am title'>hye i am shahrukh</CardWithTitle></div>
<hr/>
<div style={{ fontWeight: 'bold'}}>Alert button with Handler</div>
<Click/>
<hr/>
<div style={{ fontWeight: 'bold'}}>Forms and Card</div>
<Form/>
<hr/>
<div style={{ fontWeight: 'bold'}}>LifeCycle method</div>
<LifeCycle/>
<hr/>
<div style={{ fontWeight: 'bold'}}>UseEffectExample</div>
<UseButton/>
<hr/>
<div style={{fontWeight: 'bold'}}>Form FormValidation (concept of Debouncing is also there)</div>
<FormValidation/>
<hr/>
<div style={{fontWeight: 'bold'}}>Conditional Rendering</div>
<ConditionalExample/>
<hr/>
<div style={{fontWeight: 'bold'}}>UncontrolledComponent</div>
<UncontrolledComponent/>
<hr/>
<div style={{fontWeight: 'bold'}}>Fetching Example</div>
<FetchExample/>
</>
}

export default App;
