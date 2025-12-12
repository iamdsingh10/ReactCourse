import { Component } from "react";
import LifeCycleChild from "./LifeCycleChild";

class LifeCycle extends Component{
    constructor (){
        super()
    }
componentWillMount(){
    console.log('i am from will mount')
}
componentDidMount(){
    console.log('i am from did mount')
}
    render(){
        console.log(' i  am from render')
        return <><div>
            hye I am LifeCycle Render
        </div>
        <LifeCycleChild/>
        </>
    }
}

export default LifeCycle;