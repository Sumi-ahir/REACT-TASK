import { useState } from "react"


const Card = (props) => {
        const [status, setStatus] = useState(true)
  return (
    <div style={{backgroundColor:'pink',margin:"30px",padding: "20px",width:"300px" }} className='bg-red p-5 m-20 flex justify-center'>
        <h2>Name : {props.name}</h2>
        <p>Skills :{props.skill}</p>
        <button 
        onClick={()=>setStatus(!status)}
        style={{backgroundColor:status?'green':'red',color:status?"black":'white',margin:"3px"}}>
            {status?"unfollow":"follow"}
        </button>
    </div>
  )
}

export default Card