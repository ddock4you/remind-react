
interface TodoText {
    text: string;
}

const TodoItem = ({text}:TodoText) => {
    return (
        <li>{text}</li>
    )
}

export default TodoItem;