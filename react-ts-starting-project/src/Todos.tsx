import Todo from '../src/models/Todo';
import TodoItem from './TodoItem';

const Todos:React.FC<{items: Todo[]}> = ({items}) => {
    console.log(items);
    return (
        <ul>
            {items.map(({id, text}) => (
                <TodoItem key={id} text={text} />
            ))}
        </ul>
    )
}

export default Todos;