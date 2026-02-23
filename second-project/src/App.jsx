import { products } from './products.js'
import { useState } from 'react'
import "./App.css";
const App = () => {
  const [count, setCount] = useState(0)

  return <>
    <h1>{count}</h1>
    <button onClick={() => {
      setCount(count + 1)
    }}>++</button>
  </>
}

export default App;

// state - state is one type of data which render in ui and also can change with UI.

// state is something which can hold data which can used to render in ui.

// we cant change state directly by assignment.
// we have to use update function to set state.

// useState = Hook
// useState is a hook of react which is used to create state.

