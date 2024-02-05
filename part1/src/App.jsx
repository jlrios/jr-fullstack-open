import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = (props) => {
  console.log(props)
  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 23
  console.log(now, a + b)

  const name = 'John'
  const age = 25

  return (
    <>
      <h1>Greetings!</h1>
      <Hello name='Ringo' age={age + 1} />
      <Hello name={name} age={age} />
    </>
  )
}

export default App
