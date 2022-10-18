import React from 'react'
import { Button } from 'react-bootstrap';
import './Test.css';

export default function Test() {
  return (
	<>
	<input type="text"  placeholder='enter publisher id'/>
	<br/>
	<input type='file' />
	<br/>
	<input type="text"  placeholder='Description'/>
	<br/>
	<input type="text"  placeholder='title'/>
	<br/>
	<input type="text"  placeholder='link'/>
	<br/>
	<Button>Submit</Button>
	</>
  )
}


