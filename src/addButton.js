import React from 'react';

class AddButton extends React.Component {
  render() {
    return(
      <button onClick={this.props.onClick} id="addBtn">Add Task</button>
    )
  }
}


export default AddButton;
