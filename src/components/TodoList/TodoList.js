import {TodoItem,TodoText,TodoListStyle,TodoListCheckbox,TodoListButton} from './TodoList.styled'


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

export default TodoList;
