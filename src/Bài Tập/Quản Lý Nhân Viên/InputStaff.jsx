import React, { Component } from 'react';

class InputStaff extends Component {
    constructor(){
        super();
        this.state=
        {
           staff:{
            name : "",
            age:"",
            gender:"",
            addres:"",
           },
        }

    }
    handleAdd=(e)=>{
        const{name , value}=e.target;
        this.setState({
           staff:{
            ...this.state.staff,
            [name]:value
           },
        })
    }
    handleAddStaff=(e)=>{
        e.preventDefault();
      let  flag=true
        if(this.state.staff.name==""||this.state.staff.age==""||this.state.staff.gender==""||this.state.staff.addres==""){
            flag=false;
            alert("Không được để trống")
        }
       if(flag){
        this.props.addStaff(this.state.staff);
        this.setState({
            staff:{
                name : "",
                age:"",
                gender:"",
                addres:"",
               }
        })
       }
    }
   
    render() {
        const{name,age,gender,addres}=this.state.staff;
        console.log(this.props.edit);
        return (
            <div>
                <form action="">
                    <label htmlFor="">Nhập tên</label><br />
                    <input type="text"  name="name" id="" onChange={this.handleAdd} value={name} /><br />
                    <label htmlFor="">Nhập tuổi</label><br />
                    <input type="text" name="age" id="" onChange={this.handleAdd} value={age}/><br></br>
                    <label htmlFor="">Nhập giới tính</label><br />
                    <input type="text" name="gender" id="" onChange={this.handleAdd} value={gender}/><br />
                    <label htmlFor="">Nhập Quê quán</label><br />
                    <input type="text" name="addres" id="" onChange={this.handleAdd} value={addres}/><br />
                    <button onClick={this.handleAddStaff}>Thêm</button>
                </form>
            </div>
        );
    }
}

export default InputStaff;