import React from 'react'
import './Socialbuttons.css';

function hide(){

}
function Socialbuttons() {
  return (
	
<div id="social-platforms">
<a class="btn btn-icon btn-linkedin" href="#"><i class="fa fa-share"></i><span>share</span></a>
<a class="btn btn-icon btn-twitter" onClick={hide}><i class="fa fa-comment"></i><span>comment</span></a>
<a class="btn btn-icon btn-googleplus" href="#"><i class="fa fa-bookmark"></i><span>save</span></a>
</div>

  )
}

export default Socialbuttons



