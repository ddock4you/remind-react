import React from 'react';
import Todo from '../src/models/Todo'
import Todos from './Todos';

const TodoItem =[
    new Todo('aaaaaaaaa'),
    new Todo('bbbbbbbbb'),
    new Todo('cccccccccc'),
]

function App() {
  return (
    <div>
      <Todos items={TodoItem} />
    </div>
  );
}

export default App;
