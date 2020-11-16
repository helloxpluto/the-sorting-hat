import React, { useState } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Body from './Body'
import Header from './Header'
import './App.css';

function App() {
  const [house, setHouse] = useState('')
  const [houseInfo, setHouseInfo] = useState('')
  const [houseImage, setHouseImage] = useState('')
  
  const url = 
  return (
    <div className="App">
      <Body/>
      <Header/>
    
    </div>
  );
}

export default App;