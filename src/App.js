import React, { Component } from 'react'

import TodoList from './Component/TodoList'
import Item from './Component/Item'
import uuid from 'uuid';

import '../src/App.css'



class App extends Component {
  state={
   /*  items:[{id:1,
    title:'wake up'},
    {id:2,
      title:'wake up',
  ] */
  }
  render() {
    return (
      <div className="App">
        <TodoList/>
        <Item/>
      </div>
    )
  }
}
export default App;