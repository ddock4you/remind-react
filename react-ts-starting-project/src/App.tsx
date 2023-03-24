import {useState} from 'react';
import Todo from '../src/models/Todo'
import NewTodo from './NewTodo';
import Todos from './Todos';

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);


    const addTodo = (todo:string) => {
        setTodos((prevTodo) => {
            return prevTodo.concat(new Todo(todo))
        })
    }

    const deleteTodo = (id:string) => {
        setTodos((prevTodo) => {
            return prevTodo.filter((todo) => todo.id !== id)
        });
    }

    return (
        <div>
            <NewTodo addTodo={addTodo} />
            <Todos items={todos} deleteTodo={deleteTodo}/>
        </div>
    );
}

export default App;
