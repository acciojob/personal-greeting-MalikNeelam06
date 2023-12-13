
import React from "react";
import { useState } from "react";
import './../styles/App.css';

const App = () => {
  let[value,setValue]=useState("");
  let[greeting,setGreeting]=useState("");
  function implement(e){
setValue(e.target.value);
setGreeting(`Hello ${value}!`);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <form>
          <label>Enter your name:</label>
          <input onChange={implement}></input>
        </form>
        <p>{greeting}</p>
    </div>
  )
}

export default App
