import Counter from './components/Counter'
import Products from './components/Products'
import "./App.css"

const App = () => {
  return <>
    {/* <Counter /> */}
    <Products />
  </>
}

export default App;


// state - state is one type of data which render in ui and also can change with UI.

// state is something which can hold data which can used to render in ui.

// we cant change state directly by assignment.
// we have to use update function to set state.

// useState = Hook
// useState is a hook of react which is used to create state.

// task 1 - multi action buttons for change count state.
// task 2 - count total price and dispplay in ui, using useState & useEffect, dummyjson/products
// task 3 - fruits list -> with name and emoji
