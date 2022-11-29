import TodoList from './TodoList';
import { Component } from 'react';
// import initialTodos from '../todos.json'
import TodoEditor from './TodoEditor'
import shortid from 'shortid'
import Filter from './Filter';
// import IconButton from './IconButton';
// import {BiBookmarkPlus} from 'react-icons/bi';
import Modal from './Modal';

export class App extends Component {
  state = {
    todos: [],
    filter: '',
    showModal: false,
  };



  componentDidMount() {
    console.log('App component Did Mount');
    const todos = localStorage.getItem('todos');
    const parsedTodos = JSON.parse(todos);
    if (parsedTodos) {
       this.setState({todos:parsedTodos})
    }
   
  }
  
  componentDidUpdate(prevProps,prevState) {
    console.log('App componen Did Update aqdd todo to localStorage');

    if (this.state.todos !== prevState.todos) { 
      console.log("change todos");
      localStorage.setItem('todos', JSON.stringify(this.state.todos));
    }
    

    // console.log(prevState);
    // console.log(this.state);
  }


  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    }
    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }))

    this.toggleModal();


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


  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal:!showModal
    }))
  }

  render() {

    console.log('App render');
    const { todos,filter,showModal } = this.state;
    const totalTodoCount = todos.length;
    const comletedTodoCount = todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0);

    const normalizedFilter = this.state.filter.toLowerCase();
    const filterTodos = this.state.todos.filter(todo=>todo.text.toLowerCase().includes(normalizedFilter))


    return (
      <>
         <button type='button' onClick={this.toggleModal}>Open Modal</button>
          
           {showModal && (
          <Modal onClose={this.toggleModal}>
            <TodoEditor onSubmit={this.addTodo} />
          </Modal>
        )}
             
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
