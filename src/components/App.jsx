import TodoList from './TodoList';
import { Component } from 'react';
import initialTodos from '../todos.json'

export class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo=>todo.id !== todoId),
    }))
  }

  render() {
    const { todos } = this.state;
    return (
      <>
        <TodoList todos={todos} onDeLeteTodo={this.deleteTodo} />
      </>
    );
  }
}
