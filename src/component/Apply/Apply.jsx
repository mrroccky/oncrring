import React from 'react'
import { Button } from 'react-bootstrap'
import './Apply.css'
function Apply(props) {

	const shoot = () => {
		alert("🚀HARE YOU GO! link opening on new tab");
		window.open(props.linkcontent)
	  };
  return (
	<div className='Apply'>
		{props.linkcontent?<button style={{"border":"2px solid var(--theme)", "textAlign":"center", "alignSelf":"center"}} onClick={shoot} className='ApplyNowButton'>Apply Now</button>:<div></div>}
		<div style={{"marginBottom":"10px"}}></div>

	</div>
  )
}

export default Apply