import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {
            this.props.todos.map(item => {
              return (<Todo handleClick={this.props.handleClick} todos={item}/>)
            })
          }
      </ul>
      </div>
    )
  }
}
