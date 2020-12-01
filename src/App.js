import React, { useState, useEffect } from 'react';
import { Link, Route, Redirect } from 'react-router-dom';
import Body from './components/Body';
import Header from './components/Header';
import { Card, Button, Form } from 'react-bootstrap';
import './App.css';
import Houses from './components/Houses';
import Hat from './components/Hat';

function App() {
	// const [house, setHouse] = useState('');
	const [houseInfo, setHouseInfo] = useState('');
//   const [userName, setUserName] = useState('name');

	// useEffect(() => {
	// 	const url = 'https://www.potterapi.com/v1/sortingHat';
	// 	fetch(url)
	// 		.then((res) => res.json())
	// 		.then((res) => setHouse(res))
	// 		.catch(console.error);
	// }, []);

	// function handleSubmit(event) {
	// 	event.preventDefault();

	// 	var useName = userName 
	
	// }

	// function handleChange (event) {
	// 	event.preventDefault()
	// 	setUserName(
	// 		event.target.input
	// 	)
	// 	console.log(setUserName)
		
	// }

	return (
		<div className='App'>
			<Header />
			<Card className='textCenter'>
				<Card.Header>
					<div className='hat'>
						<Hat />
					</div>
				</Card.Header>
				<Body />
				{/* <Card.Body className='cardBody'>
					<Card.Text>
						Enter your name and let the sorting hat choose your HOUSE
					</Card.Text>
					<Body house={house} />
					<Form.Group controlId="formPlaintextName" className='formCard'>
						<Form.Control
							className='nameForm'
							size='lg'
							type='text'
							placeholder='Enter your name'
						
						/>
							<Button className='findButton' variant='outline-warning' type='submit' onClick={handleChange}>
							Find my house
						</Button>
					</Form.Group>
				</Card.Body> */}
			</Card>
			{console.log(Form)}
			{/* <form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Enter your name'
					onChange={(event) => {
						setUserName({
							name: event.target.input,
						});
						{
							console.log(event.input);
						}
					}}
				/>
				<>
					<Button className='findButton' variant='outline-danger'>Find my house</Button>{' '}
					
					
				</>
			</form> */}
		</div>
	);
}


export default App;
