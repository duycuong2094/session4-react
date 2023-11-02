import React, { Component } from "react";

class ListStaf extends Component {
    constructor(){
        super();
        this.state={
            check:true
        }
    }
    update=(index)=>{
        this.props.update(index)
    }
  render() {
    return (
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>Tên</th>
              <th>Tuổi</th>
              <th>Gioi Tính</th>
              <th>Địa Chỉ</th>
              <th>Hành Động</th>
            </tr>
            </thead>
            <tbody>
              {this.props.listStaff.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                  <td>{item.addres}</td>
                  <td><button onClick={()=>this.props.dele(index)}>Xóa</button> <button onClick={()=>{this.update(index)}}>Sửa</button> </td>
                </tr>
              ))}
            </tbody>
         
        </table>
      </div>
    );
  }
}

export default ListStaf;
