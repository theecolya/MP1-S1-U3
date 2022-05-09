import React from 'react'
import TodoList from './TodoList'
import Form from './Form'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  removeChecked = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(item => {
        item.completed === false
      })
    })
  }

  handleAdd = (task) => {
    const newTask = {
      name: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTask]
    })
  }
  handleClick = (clickedTask) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(item => {
        if (item.id === clickedTask) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <TodoList handleClick={this.handleClick} todos={this.state.todos} />
        <Form handleAdd={this.handleAdd}/>
        <button onClick={this.removeChecked}>Hide Completed Tasks</button>
      </div>
    )
  }
}
