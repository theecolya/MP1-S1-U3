import React from 'react'

export default class Todo extends React.Component {
  handleClick = () => {
    this.props.handleClick(this.props.todos.id)
  }
  render() {
    return (
      <div>
        <li onClick={this.handleClick}>
          {this.props.todos.name} {this.props.todos.completed ? <span>✔</span> : <span></span>}
        </li>
      </div>
    )
  }
}
