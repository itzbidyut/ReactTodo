import React, { Component } from 'react'

/* import TodoList from './Component/TodoList' */
/* import Item from './Component/Item' */
import uuid from 'uuid';
import TodoInput from './Component/TodoInput'
import '../src/App.css'
import TodoList from './Component/TodoList';



class App extends Component {
  state={
   items:[] ,
    id:uuid(),
    item:"",
    editItem:false
  };

  handleChange= e =>{
    this.setState({
      item:e.target.value
    });
  };

  handleSubmit=e=>{
    e.preventDefault();
    const newItem={
      id: this.state.id,
      title: this.state.item
    };
    const updateItem=[...this.state.items,newItem];
    this.setState(
      {
      items: updateItem,
      item:"",
      id:uuid(),
      editItem:false
    },
    
    );
    
  };
 /*  ()=>console.log(this.state) */
  ClearList =() =>{
    console.log('clear list');
  
  };

  handleDelete =(id) =>{
    console.log('deleted');
  
  };

  handleEdit =(id) =>{
    console.log('edit');
  
  };



  render() {
  
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-2">
          <h2 className="display-2 m-3 pb-3 text-primary text-center">Todo App</h2>
                <TodoInput item={this.state.item} 
                          handleChange={this.handleChange} 
                          handleEdit={this.handleEdit} 
                          handleSubmit={this.state.handleSubmit}
                  />
                <TodoList items={this.state.items}
                      ClearList={this.ClearList}
                      handleEdit={this.handleEdit}
                      handleDelete={this.handleDelete}                
                />
          </div>
        </div>
       
      </div>
    )
  }
}
export default App;