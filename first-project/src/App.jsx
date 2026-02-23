
// component
// 1. functional component
// 2. class component

// functional component return UI element.

// function App() {
//   return <div></div>
// }

// function App() {
//   return <>
//     <h1>Home Page</h1>
//   </> // fragment -> can hold more element like div
// }

// export default App;

// export karaneke bhi 2 types
// default export -> you can export only one thing from file
// named export -> you can export multiple thing from file
// you can use both in same file.

// destructuring
import "./App.css";
import fruits from "./data.js";
import { vegetables, fastfood } from './data.js'

const App = () => <>
  {fruits.map(fruit => <p>{fruit}</p>)}
  {vegetables.map((v) => <p>{v}</p>)}
  {fastfood.map((v) => <p>{v}</p>)}
</>

export default App;