import React, { useState } from 'react'

const Counter = () => {
  const [count, setcount] = useState(0)
  const incValue=()=>{
    setcount(prev => prev + 1)

    // setcount(count + 1)
  }
  const decvalue=()=>{if(count>0){setcount(count-1)}}
  

  return (
    <div className='bg-[pink] flex m-10 flex-col justify-center items-center p-2'>
      <h2 className='text-xl'>{count}</h2>
      <div className="flex gap-3 p-5">
             <button onClick={incValue} className='bg-white text-black p-3'>INC(+)</button><button onClick={decvalue} className='bg-white text-black p-3'>DEC(-)</button>
             <button onClick={()=>{setcount(0)}} className='bg-white text-black p-3'>RESET</button>
      </div>
   
    </div>
  )
}

export default Counter

















// import { useState } from "react"

// const Counter = () => {
// const [count, setcount] = useState(0)
// const incvalue=()=>{
//   setcount(count+1)
// }
// const decvalue = () => {
//   if (count > 0) {
//     setcount(count - 1)
//   }
// }


//   return (
//     <div className='bg-amber-200 flex flex-col justify-center'>
//         <h2>{count}</h2>
//         <div className='flex gap-4 text-xl'> 
//            <button
//            onClick={incvalue}
//            className="bg-amber-400 color-black p-4">+</button> 
//            <button
//             onClick={decvalue}
//            className="bg-amber-400 color-black p-4">-</button>
//         </div>
//     </div>
//   )
// }

// export default Counter