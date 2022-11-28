import { TodoItem, TodoListStyle } from './TodoList.styled';
import PropTypes from 'prop-types';
import Todo from 'components/Todo/Todo';


const TodoList = ({ todos, onDeLeteTodo, onToggleComleted }) => {
  return (
    <TodoListStyle>
      {todos.map(({ id, text, completed }) => (
        <TodoItem key={id}>
          <Todo
            text={text}
            completed={completed}
            onToggleComleted={() => onToggleComleted(id)}
            onDeLeteTodo={()=>onDeLeteTodo(id)}
          />
        </TodoItem>
      ))}
    </TodoListStyle>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onDeLeteTodo: PropTypes.func.isRequired,
  onToggleComleted: PropTypes.func.isRequired,
};

export default TodoList;
