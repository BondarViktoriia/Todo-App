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

  toggleComleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    }))
  }


  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    const comletedTodoCount = todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);

    return (
      <>
        <div>
          <p>Общее количетсво:{totalTodoCount} </p>
          <p>Количество выполненных:{comletedTodoCount} </p>
        </div>
        <TodoList todos={todos} onDeLeteTodo={this.deleteTodo} onToggleComleted={this.toggleComleted } />
      </>
    );
  }
}
