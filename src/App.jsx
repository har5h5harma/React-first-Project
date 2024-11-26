import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0);

  //let counter=15;
  const AddValue=()=>{
    counter=counter+1;
    setCounter(counter);
    //console.log("value added",counter);
  }
  const DeductValue=()=>{
    counter=counter-1;
    setCounter(counter);
    //console.log("value deducted",counter);
    
  }
  return (
    <>
    <h1>First project of react</h1>
    <h2>COUNTER</h2>
    <h2>counter value: {counter}</h2>
    <button onClick={AddValue}>add value</button><br/><br/>
    <button onClick={DeductValue}>deduct value</button>
    </>
  )
}

export default App
