import React, { useState, useEffect } from 'react';
import Body from './components/Body';
import Header from './components/Header';
import { Card } from 'react-bootstrap';
import './App.css';
import Hat from './components/Hat';

function App() {


	return (
		<div className='App'>
			<Header className='title' />
			<Card className='textCenter'>
				<Card.Header>
					<div className='hat'>
						<Hat />
					</div>
				</Card.Header>
				<Body />
			</Card>
		
		</div>
	);
}


export default App;
