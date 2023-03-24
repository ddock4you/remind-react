import {useRef} from 'react';

const NewTodo = ({addTodo}:{addTodo: (text:string) => void}) => {
    const inputTextRef = useRef<HTMLInputElement>(null);
    
    const submithandler = (event:React.FormEvent) => {
        event.preventDefault();

        const enteredText = inputTextRef.current!.value;

        if (enteredText.trim().length === 0) return;
        addTodo(enteredText);
    }
    
    return (
        <form onSubmit={submithandler}>
            <label htmlFor="">Todo text</label>
            <input type="text" id="text" ref={inputTextRef}/>
            <button type="submit">submit</button>
        </form>
    )
}

export default NewTodo;