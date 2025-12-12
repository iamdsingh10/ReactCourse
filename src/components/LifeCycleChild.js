import { Component } from "react";

class LifeCycleChild extends Component{
    constructor(){
        super()
    }

    componentWillMount(){
        console.log('hye i am from will mount child');
    }

    componentDidMount(){
        console.log('hye i am from did mount child')
    }
    render(){
        console.log('i am from render child')
        return<>
        <div>hye i am from child</div>
        </>
    }
}

export default LifeCycleChild;