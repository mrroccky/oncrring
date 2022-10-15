import React from 'react'

function Comment() {
  return (
    < >Comment
      <div style={{ textAlign: 'center' }}>
        <input style={{ borderColor:'var(--theme)', borderRadius:'6px', padding:'5px',margin:'10px' }} type={'text'} placeholder={'name'} /><br />
        <input  style={{ borderColor:'var(--theme)', borderRadius:'6px', padding:'5px',margin:'10px' }}  type={'number'} placeholder={'contact number'} /><br />
        <input  style={{ borderColor:'var(--theme)', borderRadius:'6px', padding:'5px',margin:'10px' }}  type={'email'} placeholder={'email'} /><br />
        <textarea  style={{ borderColor:'var(--theme)', borderRadius:'6px', padding:'5px',margin:'10px' }}  placeholder='add comment' /><br />
        <input  style={{ borderColor:'var(--theme)', borderRadius:'6px', padding:'5px',margin:'10px' }}  type={'password'} placeholder={'password'} /><br />
        <input  style={{ borderColor:'var(--theme)', borderRadius:'6px', padding:'5px',margin:'10px' }}  type="submit" />
      </div>
    </>
  )
}

export default Comment