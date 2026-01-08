import React from 'react'
import Form from './components/form';

const App = () => {
  return (
    <div>
      <Form/>
    </div>
  )
}

export default App










// import { useState } from "react";
// import Card from './components/Active';

// const App = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: "Sumi", skill: "React", active: true },
//     { id: 2, name: "Amit", skill: "Node", active: false },
//     { id: 3, name: "Ravi", skill: "MongoDB", active: true },
//   ]);

//   const toggleStatus = (id) => {
//     setUsers(prev =>
//       prev.map(user =>
//         user.id === id
//           ? { ...user, active: !user.active }
//           :user
//       )
//     );
//   };

//   return (
//     <div>
//       {users.map(user => (
//         <Card
//           key={user.id}
//           user={user}
//           toggleStatus={toggleStatus}
//         />
//       ))}
//     </div>
//   );
// };

// export default App;
