import React, { useState } from 'react'

const Form = () => {
    const [name, setname] = useState()
    const submitHandler=(e)=>{
        e.preventDefault();
        setname(" ");


        alert('form submited')
    }
  return (
    <div>
        <form action="" onSubmit={(e)=>{submitHandler(e)}}>
        <input type="text" placeholder='name' value={name}
        onChange={()=>{
            setname(e.target.value)}}
        />
        <br />
        <button >submit</button>
        </form>
    </div>
  )
}

export default Form