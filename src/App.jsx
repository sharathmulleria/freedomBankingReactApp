import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Login from './components/Login/Login';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Login />
    </>
  )
}

export default App
