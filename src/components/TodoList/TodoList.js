import {TodoItem,TodoText,TodoListStyle} from './TodoList.styled'


const TodoList = ({ todos,onDeLeteTodo }) => {
  return (
    <TodoListStyle>
      {todos.map(({id,text}) => (
        <TodoItem key={id}>
              <TodoText>{text}</TodoText>
              <button type="button" onClick={()=>onDeLeteTodo(id)}> Delete</button>
        </TodoItem>
      ))}
    </TodoListStyle>
  );
};

export default TodoList;
