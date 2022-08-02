
interface TodoItemProp {
    text: string;
    deleteTodo: () => void
}

const TodoItem = ({text, deleteTodo}:TodoItemProp) => {
    return (
        <li onClick={deleteTodo}>{text}</li>
    )
}

export default TodoItem;