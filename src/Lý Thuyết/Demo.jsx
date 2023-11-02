import React, { Component } from 'react';

class Demo extends Component {
    constructor(){
        super();
        this.state={
            cout:0,
        }
    }
    shouldComponentUpdate=()=>{
        console.log("shouldComponentUpdate được chạy");
        return true
    }
    componentDidUpdate=()=>{
        console.log("ComponentDidUpdate được chạy");
    }
    
    componentDidMount=()=>{
        console.log("Sau khi render lần đầu tiên chạy đến componentDidMount");
    }
    componentWillMount=()=>{
        console.log("componentWillMount bắt đầu chạy");
    }
    interser=()=>{
        this.setState({
            cout:this.state.cout+1
        })
    }
    render() {
console.log("Component bắt đầu chạy lần đầu tiên");
        return (
            <div>
                <div>{this.state.cout}</div>
                <button onClick={this.interser}>Click</button>
            </div>
        );
    }
}

export default Demo;