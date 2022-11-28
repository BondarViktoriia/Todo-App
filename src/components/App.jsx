import TodoList from './TodoList';
import { Component } from 'react';
import initialTodos from '../todos.json'
import TodoEditor from './TodoEditor'
import shortid from 'shortid'
import Filter from './Filter';

export class App extends Component {
  state = {
    todos: initialTodos,
    filter:'',
  };


  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    }
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }))


}  
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

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }


  render() {
    const { todos,filter } = this.state;
    const totalTodoCount = todos.length;
    const comletedTodoCount = todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);

    const normalizedFilter = this.state.filter.toLowerCase();
    const filterTodos = this.state.todos.filter(todo=>todo.text.toLowerCase().includes(normalizedFilter))


    return (
      <>
                  <TodoEditor onSubmit={this.addTodo} />
        <div>
          <p>Общее количетсво:{totalTodoCount} </p>
          <p>Количество выполненных:{comletedTodoCount} </p>
        </div>

        <Filter value={filter} onChange={this.changeFilter}  />
        <TodoList todos={filterTodos} onDeLeteTodo={this.deleteTodo} onToggleComleted={this.toggleComleted } />
      </>
    );
  }
}
