
function Comment() {


  async function send(){

  let headers = new Headers();

  headers.append('Content-Type', 'application/json');
  headers.append('Accept', 'application/json');
  // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
  headers.append('Origin','http://localhost:3000');
  
  var res =await fetch(process.env.REACT_APP_POSTJOB_ENDPOINT, {
      method: 'POST',
  mode: 'cors', 
  cache: 'no-cache',
  headers:headers,
  body:JSON.stringify({
    
  },)})
  
}


function handelSubmit ( event ){
  event.preventDefault();
  console.log(event.target.form.image.value);
  console.log(event.target.form.name.value);
}




  return (
    < >Comment

      <div style={{ textAlign: 'center' }}>
        <form onSubmit={this.handelSubmit}>
        <input style={{ borderColor:'var(--theme)', borderRadius:'6px', padding:'5px',margin:'10px' }} className="image" type={'file'} placeholder={'image'} /><br />
        <input style={{ borderColor:'var(--theme)', borderRadius:'6px', padding:'5px',margin:'10px' }} className="name" type={'text'} placeholder={'name'} /><br />
        <input  style={{ borderColor:'var(--theme)', borderRadius:'6px', padding:'5px',margin:'10px' }} className="number" type={'number'} placeholder={'contact number'} /><br />
        <input  style={{ borderColor:'var(--theme)', borderRadius:'6px', padding:'5px',margin:'10px' }} className="email" type={'email'} placeholder={'email'} /><br />
        <textarea  style={{ borderColor:'var(--theme)', borderRadius:'6px', padding:'5px',margin:'10px' }} className="comment" placeholder='add comment' /><br />
        <input  style={{ borderColor:'var(--theme)', borderRadius:'6px', padding:'5px',margin:'10px' }} className="password" type={'password'} placeholder={'password'} /><br />
        <input  style={{ borderColor:'var(--theme)', borderRadius:'6px', padding:'5px',margin:'10px' }} className="submit" type="submit" />
        </form>
      </div>
    </>
  )
}

export default Comment;