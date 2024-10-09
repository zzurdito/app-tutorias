import Layout from './components/Layout'
import Login from './components/Login'
import {Routes , Route } from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
        <Routes>
          <Route path='/' element={<Layout/>} >
            <Route path="login" element={<Login/>} />
          </Route>
        </Routes>
    </>
  )
}

export default App
