import {TodoItem,TodoText,TodoListStyle,TodoListCheckbox,TodoListButton} from './TodoList.styled'
import PropTypes from 'prop-types';

const TodoList = ({ todos,onDeLeteTodo,onToggleComleted }) => {
  return (
    <TodoListStyle>
      {todos.map(({id,text,completed}) => (
        <TodoItem key={id}>
          <TodoText>{text}</TodoText>
          <TodoListCheckbox  type="checkbox" checked={completed} onChange={()=>onToggleComleted(id)} />
          <TodoListButton type="button" onClick={() => onDeLeteTodo(id)}> Delete</TodoListButton>
          
        </TodoItem>
      ))}
    </TodoListStyle>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed:PropTypes.bool.isRequired,
  })).isRequired,
  onDeLeteTodo: PropTypes.func.isRequired,
  onToggleComleted:PropTypes.func.isRequired,
}

export default TodoList;
