import {useRef} from 'react';

const NewTodo = () => {
    const inputTextRef = useRef<HTMLInputElement>(null);
    
    const submithandler = (event:React.FormEvent) => {
        event.preventDefault();

        const enteredText = inputTextRef.current?.value;

        if (enteredText?.trim().length === 0) return;
    }
    
    return (
        <form onSubmit={submithandler}>
            <label htmlFor="">Todo text</label>
            <input type="text" id="text" ref={inputTextRef}/>
            <button type="submit" ></button>
        </form>
    )
}

export default NewTodo;