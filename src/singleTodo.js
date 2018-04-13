import React, {Component} from "react";

class SingleTodo extends Component {
  render() {
    return (
      <li>{this.props.todo}<button onClick={this.props.delete} id="deleteBtn">X</button></li>
    );
  }
}

export default SingleTodo;
