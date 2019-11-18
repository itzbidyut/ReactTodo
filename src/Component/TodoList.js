import React, { Component } from 'react'

import TodoInput from './TodoInput'

export default class TodoList extends Component {
    render() {
        return (
            <div>
                <h2 className="display-2 m-3 pb-3">Todo App</h2>

                <TodoInput/>
                
            </div>
        )
    }
}
