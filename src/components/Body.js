import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Body = ({house}, {setUserName}) => {
	return <div>{`${setUserName} house is ${house}`}</div>;
};

export default Body;
