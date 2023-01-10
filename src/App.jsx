import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [formdata,setFormdata]=useState({
    name:"",
    email:"",
    companay_name:"",
    title:"",
    password:"",
  })

  const handleChange=(e)=>{
    const {id,value}=e.target;
    setFormdata({...formdata,[id]:value})
   
  }

  const submit=()=>{
    if(formdata.name=="" || formdata.email=="" || formdata.password=="" || formdata.title=="" || formdata.companay_name==""){
      alert("Input field can't be empty..")
    }
    else{
      localStorage.setItem("Voosh_data",JSON.stringify(formdata))
      alert("Data is added to the localstorage successfully !")
      setFormdata({
        name:"",
        email:"",
        companay_name:"",
        title:"",
        password:"",

      }
       
      )
    }
     
      
  }
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
          <div id='ftwo'>
            <div>
                <div id='ftwo-sub'>
                  <p> Name*</p>
                  <input type="text" id='name' value={formdata.name} placeholder=' Ex John Doe' onChange={handleChange} />
                </div>
                <div id='ftwo-sub'>
                  <p> Email*</p>
                  <input type="text" id='email' value={formdata.email} placeholder=' Ex mail@website.com' onChange={handleChange} />
                </div>
                <div id='ftwo-sub'>
                  <p> Password*</p>
                  <input type="password" id='password' value={formdata.password} placeholder=' Password' onChange={handleChange} />
                </div>
                <div id='ftwo-sub'>
                  <p> Companay Name*</p>
                  <input type="text" id='companay_name' value={formdata.companay_name} placeholder=' Ex XYZ PVT LTD' onChange={handleChange} />
                </div>
                <div id='ftwo-sub'>
                  <p> Your title*</p>
                  <input type="text" id='title'  value={formdata.title} placeholder=' Ex Operational Head' onChange={handleChange} />
                </div>
                <div id='ftwo-sub1'>
                  <button onClick={submit}>Book Demo</button>
                </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App
