import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import MainSection from './components/mainsection/MainSection'
import Section from './components/section/Section'
import RegisterForm from './components/registrationform/RegisterForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <MainSection/>
      <Section/>
     
       
    </>
  )
}

export default App
