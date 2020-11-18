import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Body = ({house}, {userName}) => {
	return <div>{`${userName}'s house is ${house}`}</div>;
};

export default Body;
