import React from 'react';
import ListEntry from './ListEntry.jsx'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      todos: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      todo: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos, this.state.todo]
    })
    document.getElementById("form").reset();
  }


  render() {
    return(
      <div>
        <form id="form" type="submit" required onSubmit={this.handleSubmit}>
          <label>
            Add a todo:
            <input type="text" onChange={this.handleChange}></input>
          </label>
        </form>
        {this.state.todos.map((todo, index) => (<ListEntry todo={todo} key={index}/>))}
      </div>
    )
  }
}

export default List;