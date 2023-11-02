import React, { Component } from 'react';

class Bai12 extends Component {
    constructor(){
        super();
        this.state={
            msv:0,
            arrMs:[101,102,103,104,105,106.107,108,109,110],
        }
    }
    handChangeAdd=(e)=>{
        this.setState({
            msv:e.target.value
        })
    }
    Addmsv=(e)=>{
        e.preventDefault();
        let flag = true
        if(this.state.msv==""){
            alert("Không được để trống")
            flag=false;
        }
        for(let  i = 0 ;i<this.state.arrMs.length;i++){
            if(this.state.arrMs[i]==this.state.msv){
                alert("Mã nhân viên bạn nhập đã tồn tại")
                flag=false
            }
        }
        if(flag){
            this.setState({
                arrMs:[...this.state.arrMs,this.state.msv]
            })
            alert("Thêm thành công")
        }
    }
    render() {
        return (
            <div>
                <form action="">
                    <input type="text" name="" id="" onChange={this.handChangeAdd} placeholder='Nhập mã nhân viên cần thêm' />
                    <button onClick={this.Addmsv}>Thêm</button>
                </form>
            </div>
        );
    }
}

export default Bai12;