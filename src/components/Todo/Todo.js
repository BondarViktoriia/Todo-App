import { TodoText, TodoListCheckbox, TodoListButton } from 'components/TodoList/TodoList.styled';
import PropTypes from 'prop-types';

const Todo = ({text,completed,onToggleComleted,onDeLeteTodo}) => {
  return (
    <>
      <TodoListCheckbox
        type="checkbox"
        checked={completed}
        onChange={onToggleComleted}
      />
      <TodoText>{text}</TodoText>
      <TodoListButton type="button" onClick={onDeLeteTodo}>
        {' '}
        Delete
      </TodoListButton>
    </>
  );
};

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onToggleComleted: PropTypes.func.isRequired,
    onDeLeteTodo: PropTypes.func.isRequired,
}

export default Todo;
