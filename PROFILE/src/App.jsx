import React, { useState } from 'react'
import Profile from './component/Profile'
import UserDetails from './component/UserDetails';

const App = () => {
            const [select, setselect] = useState(null)
            const handleUser=(user)=>{
              setselect(user)
            }

  const users = [
    {
      id: 1,
      name: "Sumita Nagotha",
      role: "Frontend Developer",
      skill: ["HTML", "CSS", "React"],
      profile: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Pari Ahir",
      role: "MERN Developer",
      skill: ["MongoDB", "Express", "React", "Node"],
      profile: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div>
      {users.map((user) => (
        <Profile
          key={user.id}
          profile={user.profile}
          name={user.name}
          role={user.role}
          skill={user.skill}
          onSelect={()=>{handleUser(user)}}

        />
      ))}

      {select && <UserDetails  user={select}/>}
         
    </div>
  )
}

export default App
