import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button'

function App() {


  return (
    <>
      <h1>Color Changer</h1>
      <Button color="red" />
      <Button color="green" />
      <Button color="yellow" />
      <Button color="pink" />
      <Button color="black" />
    </>
  )
}

export default App
