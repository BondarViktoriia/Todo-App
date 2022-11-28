import { Component } from "react";
import { TodoEditorForm, TodoEditorTextarea } from './TodoEditor.styled'
import {TodoListButton} from '../TodoList/TodoList.styled'

class TodoEditor extends Component{
    state = {
       message:'', 
    }
    handleChange = e => {
        this.setState({ message: e.currentTarget.value });
    }
    
    handleSubmit = e => {
        e.preventDefault();

        // console.log(this.state)
        this.props.onSubmit(this.state.message)
        this.reset()
    }

     reset = () => {
    this.setState({ message: ''});
  };

    render() {
        return (
            <TodoEditorForm onSubmit={this.handleSubmit}>
                <TodoEditorTextarea  value={this.state.message} onChange={this.handleChange}></TodoEditorTextarea>
                <TodoListButton type="submit">Создать</TodoListButton>
            </TodoEditorForm>
        )
    }
}

export default TodoEditor;