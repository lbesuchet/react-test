import React, { useCallback, useState } from 'react';
import './App.css';
import Todos from './Todos';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["nothing"]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t: Array<string>) => [...t, "New Todo"]);
  }, []);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default App;
