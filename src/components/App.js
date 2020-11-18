import React, { useState, useEffect } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Body from './Body';
import Header from './Header';
import './App.css';
import Houses from './Houses';
import Hat from './Hat';

function App() {
	const [house, setHouse] = useState('');
	const [houseInfo, setHouseInfo] = useState('');
  const [userName, setUserName] = useState('');
  const [sendHouse, setSendHouse] = useState('')

	useEffect(() => {
		const url = 'https://www.potterapi.com/v1/sortingHat';
		fetch(url)
			.then((res) => res.json())
			.then((res) => setHouse(res))
			.catch(console.error);
	}, []);

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<div className='App'>
			<Header />
			<Hat />
			<Body house={house} />
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Enter your name'
					onChange={(event) => {
						setUserName({
							name: event.target.value,
						});
					}}
				/>
        

        <button 
          onClick={() => {
            setUserName({
              name: ''
            })
          
        }}
        >FIND MY HOUSE</button>
			</form>
		</div>
	);
}

export default App;
