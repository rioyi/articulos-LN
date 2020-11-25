import React from "react"
import './App.css';

function App() {
  const [count, setCount] = React.useState(0)
  
  const increment = () => {
    console.log('veamos')
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>Hola</h1>
      <p> {count} </p>
      <buttom onClick={increment}>Increment</buttom>
      <buttom onClick={decrement}>Decrement</buttom>
    </>
  );
}

export default App;
