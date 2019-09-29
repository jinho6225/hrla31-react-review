import React from 'react';

class ListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        {this.props.todo}
      </div>
    )
  }
}

export default ListEntry;