import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Register />
      <Footer />
    </>
  )
}

export default App
