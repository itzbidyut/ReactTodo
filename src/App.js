import React, { Component } from 'react'

import TodoList from './Component/TodoList'
import Item from './Component/Item'

import '../src/App.css'

class App extends Component {
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