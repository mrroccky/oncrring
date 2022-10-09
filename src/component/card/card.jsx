import React from 'react'

function card() {
  return (<>	<div class="card">
	<img src="img_avatar.png" alt="Avatar" style="width:100%" />
	<div class="container">
	  <h4><b>John Doe</b></h4>
	  <p>Architect & Engineer</p>
	</div>
  </div>

  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;" />
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
  </>

  )
}

export default card