import './Governmentjobs.css';
import { useState,useEffect } from 'react';
import Loading from '../../Loading/Loading';
import Jobcard from '../../Jobcard/Jobcard';

import React from 'react'

function Governmentjobs() {

  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
  headers.append('Origin','http://localhost:3000');
  const [JobPost, setProducrs] = useState([]);
	useEffect(() => {
	 fetch(process.env.REACT_APP_GOVT_ENDPOINT, {
        method: 'GET',
    mode: 'cors', 
    cache: 'no-cache', 
    }).then(function(response){
		 response.json().then(function(data) {
			 setProducrs(data)
		 });
	 }).catch(function(error) {
		 console.log('Fetch Error:', error);
	 });
	}, [setProducrs]);









  return (
    <>
    <div className='cardocd'>
      <div className='card'>
        <h1 className='ocd'>GovernmentJobs</h1>
					{!JobPost ? <Loading /> : JobPost.map(JobPost => <Jobcard key={JobPost.id} JobPost={JobPost}/>)}

      </div>

    </div>


  </>
  )
}

export default Governmentjobs