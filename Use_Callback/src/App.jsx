// import React,{ useState, useCallback} from "react";

// function Child({onClick}){
//   console.log('Child rendered');
//   return <button onClick={onClick}>Click Me</button>;
// }

// export default function App(){
//   const [count,setCount]=useState(0);
//   const [text,setText]=useState('');

//   const handleClick=useCallback(()=>{
//     setCount((prev)=>prev+1);
//   },[]);
//   return(
//     <div>
//       <h1>UseCallback Example</h1>
//       <p>Count: {count}</p>
//       <Child onClick={handleClick} />
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="Type something..."
//       />
//     </div>
//   )
// }

import { useState } from "react";
import ReactDOM from "react-dom/client";

const App= ()=> {
  const [count,setCount]=useState(0);
  const [todos,setTodos]=useState([]);

  const calculation = expensiveCalculation(count);


  const increment = () => {
    setCount((c) => c + 1000);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };
  return(
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo,index)=>{
          return <p key={index}>{todo}</p>
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};
const expensiveCalculation = (num) => {
  console.log("Calculating...");               
  for (let i = 0; i < 1000; i++) {              
    num += 1;
  }
  return num;
};


export default App