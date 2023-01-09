import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div id='main'>
        <div id='sub1'>
          <button> <a href="#form">Book Demo</a></button>
        </div>
        <div id='sub2'>
          <img src="https://voosh.in/static/media/my_profile.61da110e7e1e80c97356.webp" alt="" />
        </div>
      </div>
      <div id='form'>
          <div id='fone'>
            <h1>Book A Demo Now</h1>
          </div>
          <div id='ftwo'></div>
      </div>
    </div>
  )
}

export default App
