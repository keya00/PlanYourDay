import React, { Component } from 'react'
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import React, { useState } from 'react';
import Plan from "./Plan";
class App extends Component {
  state={
    items:[],
    text:""
  }
  handleChange = e=>{
    this.setState({text:e.target.value})
  }
  handleAdd=e=>{
    if(this.state.text!==""){
      const items=[...this.state.items, this.state.text];
      this.setState({items:items,text:""});
    }  
  }
  handleDelete=id=>{
    console.log("Deleted",id);
    const Olditems=[...this.state.items]
    const items=Olditems.filter((element,i)=>{
      return i!==id
    })
    this.setState({items:items})
  }
    render(){
      return (
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-sm-6 mx-auto shadow-lg p-3">
            <h1 className="text-center">Todays Plan</h1>
            <div className="row">
            <div className="col-9 p-3">
              <input type="text" className="form-control  mt-n1" placeholder="Write your plan here" value={this.state.text} onChange={this.handleChange}></input>
            </div>
            <div className="col-2 p-3">
            <button className="btn btn-dark px-5 fw-bold" onClick={this.handleAdd}>ADD</button>
            </div>
            <div className="container-fluid">
              <ul className="list-unstyled row m-5">
                {
                  this.state.items.map((value,i)=>{
                    return<Plan key={i} id={i} value={value} sendData={this.handleDelete}/>
                  })
                }
              </ul>
            </div>
            </div>
            </div>
          </div>
        </div>
      )
    }
 
}

export default App;

 
