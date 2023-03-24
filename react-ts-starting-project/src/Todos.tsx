import Todo from '../src/models/Todo';
import TodoItem from './TodoItem';

const Todos:React.FC<{items: Todo[], deleteTodo: (id:string) => void}> = ({items, deleteTodo}) => {
    return (
        <ul>
            {items.map(({id, text}) => (
                <TodoItem key={id} text={text} deleteTodo={deleteTodo.bind(null, id)} />
            ))}
        </ul>
    )
}

export default Todos;