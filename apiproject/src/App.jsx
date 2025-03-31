
import React from 'react';
import axios from "./axiosConfig";
import { useEffect } from 'react';

const App = () => {
  async function apicall() {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await response.json();
    console.log(data)  
  }
  async function apicall() {
    const response = await axios.get("/random_joke");
    console.log(response.data)  
  }
  
  useEffect(()=>{
    apicall();
  },[])

  return (
    <div>
    <h1>Joke Api</h1>
    <button onClick={apicall}>Click Here</button>
    </div>
  )
}

export default App
