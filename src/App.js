import React, { Component } from 'react';
import './App.css';
import SearchBar from './searchBar.js';
import TaskContainer from './taskContainer';
import AddButton from './addButton.js';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      todos: ["yo", "bye"],
      currentTodo: "",
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onInputChange = e => {
    this.setState({ currentTodo: e.target.value })
    console.log(e.target.value)
  }

  onClick = () => {
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);

    this.setState({ todos: todosCopy, currentTodo: "" });
  }

  deleteTodo = i => {
  let todosCopy = this.state.todos.slice();

  todosCopy.splice(i, 1);

  this.setState({ todos: todosCopy });
}


  render() {

    return (
      <div className="flex-container" id="mainDiv">
        <SearchBar onChange={this.onInputChange} />
        <AddButton onClick={this.onClick} />
        <TaskContainer todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>

    );
  }
}

export default App;
