import React, { Component } from 'react';
import ListStaf from './ListStaf';
import InputStaff from './InputStaff';

class ManagerStaff extends Component {
    constructor(){
        super();
        this.state={
            arrStaff:[],
            editStaff:""
        }

    }
    addStaff=(newvalue)=>{
        this.setState({
            arrStaff:[...this.state.arrStaff,newvalue]
        })
    }
    deleStaff=(index)=>{
        let deleSaff=this.state.arrStaff.filter((item,i)=>i!=index)
        this.setState({
            arrStaff:[...deleSaff]
        })
    }
    update=(value)=>{
        let result=this.state.arrStaff.find((item,index)=>value==index);
        this.setState({
            editStaff:result
        });

        
    }
    render() {

        return (
            <div>
                <InputStaff edit={this.state.editStaff} addStaff={this.addStaff}/>
               <ListStaf  listStaff={this.state.arrStaff} dele={this.deleStaff} update={this.update}/>
            </div>
        );
    }
}

export default ManagerStaff;