import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Post from './Post';
import './App.css';


function App() {

  

  return (

    <div className="App">  
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/posts' element = {<Post/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
