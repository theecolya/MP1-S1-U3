import React from 'react'

export default class Form extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd(e.target[0].value);
    e.target[0].value = ""
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder='Type task here'/>
          <input type="submit" value="add to list"/>
        </form>
      </div>
    )
  }
}
