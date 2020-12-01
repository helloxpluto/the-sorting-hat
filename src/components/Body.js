import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';


const Body = () => {
	const [house, setHouse] = useState('');

	const [userName, setUserName] = useState('');

	const [displayName, setDisplayName] = useState('')

	useEffect(() => {
		const url = 'https://www.potterapi.com/v1/sortingHat';
		fetch(url)
			.then((res) => res.json())
			.then((res) => setHouse(res))
			.catch(console.error);
	}, []);



	
	function handleSubmit(event) {
		event.preventDefault();
		setDisplayName(userName)
		console.log(event);
	}
	
	function handleChange(event) {
		setUserName(event.target.value);
		
		
	}
	
	return (
		<div>
			{displayName && `${displayName} house is ${house}`}
			<Card className='textCenter'>
				<Card.Body className='cardBody'>
					<Card.Text>
						Enter your name and let the sorting hat choose your HOUSE
					</Card.Text>
				<Form onSubmit={handleSubmit}>

					<Form.Group  controlId='name' className='formCard'>
						<Form.Control
							className='nameForm'
							size='lg'
							type='text'
							placeholder='Enter your name'
							onChange={handleChange}
							value={userName}
						/>
					</Form.Group>
						<Button
							className='findButton'
							variant='outline-warning'

							type='submit'>
							Find my house
						</Button>
				</Form>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Body;
