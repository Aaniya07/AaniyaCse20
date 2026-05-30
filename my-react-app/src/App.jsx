import { uimport { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Student from './student'

function App() {
  const [count, setCount] = useState(0)
  const increment=()=>{
    setCount(count+1)
  }
  const decrement=()=>{
    setcount(count-1)
  }
  count reset =()=>{
    setcount
  }
  


  return (
    <>
    <h2> React counter application</h2>
    <h2>{count}</h2>
    <button onClick={increment}>Increment(+)</button>
    button onclick={decrement}>decrement(-)</button>
    <button onClick={Reset}>Reset</button>
    {/*
    <h2>students Information</h2>
    <Student name="Aaniya" course="B.Tech" marks="90"/>
    <Student name="Amisha" course="M.Tech" marks="95"/>
    <Student name="Raj" course="MCA" marks="98"/>
    {/*
    <iframe src="https://www.youtube.com/embed/vm9JsqKuU9Y" allowFullScreen></iframe>
    <button>Click Me</button>
    <h1>Welcome to My Webpage of ABES</h1>
    <h2>Hello</h2>
    <p>Hello Rohit sir</p>
    <img src="https://images.pexels.com/photos/35208681/pexels-photo-35208681.jpeg"width="500" height="500"></img>
    <audio controls>
      <source src=""></source>
    </audio>
    <video controls>
      <source src=""></source>
    </video>*/}
    </>
  )
}

export default App