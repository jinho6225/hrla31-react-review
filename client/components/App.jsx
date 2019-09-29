import React from 'react';
import List from './List.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return(
    <div>
      {(this.props.first === this.state.first && this.props.last === this.state.last) ? (
           <List />
         ) : (
          <form>
            <label>
              First Name:
              <input type="text" name="first" onChange={this.handleChange}></input>
            </label>

            <label>
              Last Name:
              <input type="text" name="last" onChange={this.handleChange}></input>
            </label>
          </form>
         )}
    </div>
    )
  }
}

export default App;
