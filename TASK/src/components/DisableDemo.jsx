import React, { useState } from 'react'

const DisableDemo = () => {
    const [accept, setaccept] = useState(false)
  return (
    <div>
       <h2> form agree</h2>
       <input 
       onChange={()=>setaccept(prev=>!prev)}
       type="checkbox" name="" id="" />agree
       <br />
       <button
       disabled={!accept}
       style={{cursor:accept?'pointer':'not-allowed'}}
        // cursor: accepted ? "pointer" : "not-allowed",
       >click</button>
    </div>
  )
}

export default DisableDemo














// import { useState } from "react";

// const DisableDemo = () => {
//   const [accepted, setAccepted] = useState(false);

//   return (
//     <div style={{ padding: "30px" }}>
//       <h2>Accept Terms</h2>

//       <label>
//         <input
//           type="checkbox"
//           onChange={() => setAccepted(prev => !prev)}
//         />
//         I accept terms & conditions
//       </label>

//       <br /><br />

//       <button
//         disabled={!accepted}
//         style={{
//           padding: "10px 20px",
//           backgroundColor: accepted ? "green" : "gray",
//           color: "white",
//           border: "none",
//           cursor: accepted ? "pointer" : "not-allowed",
//           opacity: accepted ? 1 : 0.6,
//         }}
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default DisableDemo;
