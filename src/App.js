import React, { useState } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Body from './Body'
import Header from './Header'
import './App.css';
import Houses from './Houses';


function App() {
  const [house, setHouse] = useState('')
  const [houseInfo, setHouseInfo] = useState('')
  const [houseImage, setHouseImage] = useState('')
  
  const randomHouse () => {
    const url = 'https://www.potterapi.com/v1/sortingHat';
    fetch(url)
      .then((res) => res.json())
      .then((resJson) => )
      .catch(console.error);
  }

  return(
    <div className="App">
      <Header/>
      <Body/>
      <Houses houses='houses' />
    
    </div>
  )
}

export default App;