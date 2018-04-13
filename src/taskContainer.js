import React from 'react';
import SingleTodo from './singleTodo';

class TaskContainer extends React.Component {


  render() {
    let bulletTodos = this.props.todos.map((e, i) => {
      return (
        <SingleTodo todo={e} delete={() => this.props.deleteTodo(i) } />
      );
    });

    return(
      <div className="taskContainer">
        {this.props.todos.length === 0 ? "No Todos!" : <ol id="list">{bulletTodos}</ol>}
      </div>
    )
  }
}

export default TaskContainer;
