import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import GryffindorPNG from '../images/Gryffindor.png'
import HufflepuffPNG from '../images/Hufflepuff.png'
import RavenclawPNG from '../images/Ravenclaw.png'
import SlytherinPNG from '../images/Slytherin.png'




const Body = () => {
	const [house, setHouse] = useState('');

	const [userName, setUserName] = useState('');

	const [displayName, setDisplayName] = useState('')

	const [houseName, setHouseName] = useState('')

	const [houseChange, setHouseChange] = useState('')

	const [houseImage, setHouseImage ] = useState('')
	
	const Gryffindor = 'Gryffindor values bravery, daring, nerve, and chivalry.Its emblematic animal is the lion, and its colours are scarlet and gold. Minerva McGonagall was the most recent Head of Gryffindor. Sir Nicholas de Mimsy-Porpington, also known as "Nearly Headless Nick", was the House Ghost. The founder of the House was Godric Gryffindor. Gryffindor corresponds to the element of Fire. The common room was located in one of the highest towers at Hogwarts, the entrance was situated on the seventh floor in the east wing of the castle and is guarded by a portrait of The Fat Lady. She permits entrance if given the correct password, which is changed numerous times throughout the school year. Famous Gryffindors include Albus Dumbledore, Harry Potter, and Minerva McGonagall.'

	const Hufflepuff = `Hufflepuff values hard work, dedication, patience, loyalty, and fair play. Its emblematic animal is the badger, and yellow and black are its colours. Pomona Sprout was the Head of Hufflepuff during 1991-1998, Sprout left the post of Head of Hufflepuff and Herbology Professor sometime before 2017 and her successor for the position of Head of Hufflepuff is currently unknown. The Fat Friar is its ghost. The founder of the House was Helga Hufflepuff.`

	const Ravenclaw = `Ravenclaw values intelligence, knowledge, curiosity, creativity and wit. Its emblematic animal is the eagle, and its colours are blue and bronze. The Ravenclaw Head of House in the 1990s was Filius Flitwick. The ghost of Ravenclaw is the Grey Lady, who was the daughter of Rowena Ravenclaw, the House's founder. Ravenclaw corresponds to the element of air. The Ravenclaw common room and dormitories are located in a tower on the west side of the castle. Ravenclaw students must answer a riddle as opposed to giving a password to enter their dormitories. This riddle, however, can be answered by non-Ravenclaws. Famous Ravenclaws include Luna Lovegood, Gilderoy Lockhart, Ignatia Wildsmith (inventor of Floo powder), and Garrick Ollivander.`

	const Slytherin = `Slytherin House values ambition, leadership, self-preservation, cunning and resourcefulness and was founded by Salazar Slytherin. Its emblematic animal is the serpent, and its colours are emerald green and silver. Professor Horace Slughorn was the Head of Slytherin during the 1997–1998 school year, replacing Severus Snape, who as well, replaced Slughorn as Potions Professor when he retired for the first time several years prior. Slytherin had produced the most Death Eaters and Dark Wizards, including Tom Riddle, Bellatrix Lestrange and Lucius Malfoy, for example. But that does not mean that other Houses haven’t produced any; Peter Pettigrew was a Gryffindor, and Quirinus Quirrell was a Ravenclaw.
        The Bloody Baron is the House Ghost. The founder of the House was Salazar Slytherin.`


	useEffect(() => {
		const url = 'https://www.potterapi.com/v1/sortingHat';
		fetch(url)
			.then((res) => res.json())
			.then((res) => setHouse(res))
			.catch(console.error);
	}, []);
	

	function changeHouses() {
		if (house === 'Gryffindor') {
			setHouseChange(Gryffindor)
			setHouseImage(GryffindorPNG);
		} else if (house === 'Hufflepuff') {
			setHouseChange(Hufflepuff)
			setHouseImage(HufflepuffPNG);
		} else if (house === 'Ravenclaw') {
			setHouseChange(Ravenclaw)
			setHouseImage(RavenclawPNG);
		} else if (house === 'Slytherin') {
			setHouseChange(Slytherin)
			setHouseImage(SlytherinPNG);
		}
	}

	const refreshPage = () => {
	 window.location.reload();
	}


	
	function handleSubmit(event) {
		event.preventDefault();
		setDisplayName(userName)
		
	}
	
	function handleChange(event) {
		setUserName(event.target.value);
		
		
	}

	function handleHouseName(event) {
		event.preventDefault()
		changeHouses();
		
		
			setHouseName(houseChange);
		
	}
	
	
	return (
		<div>
			<Card className='textCenter'>
				<Card.Body className='cardBody'>
					{displayName && `${displayName}'s house is ${house}`}

					<Card.Text>
						<br />
						Enter your name and let the sorting hat choose your HOUSE
					</Card.Text>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId='name' className='formCard'>
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
					{displayName && (
						<Button
							className='houseButton'
							variant='outline-warning'
							type='submit'
							onClick={handleHouseName}>
							Show my house information
						</Button>
					)}
					{displayName && houseName && (
						<Card>
							<p>scroll down ...</p>
							<Card.Body className='bodyText'>
								<div>
									<img
										className='houseImg'
										src={houseImage}
										alt='matching harry potter house image'
									/>
								</div>
								<div>{houseName}</div>
							</Card.Body>
						</Card>
					)}
					<Button
						className='findButton'
						variant='outline-warning'
						type='submit'
						onClick={refreshPage}>
						Reset The Sorting Hat
					</Button>
				</Card.Body>
			</Card>
		</div>
	);
};

export default Body;
