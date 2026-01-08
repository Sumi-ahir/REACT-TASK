import React from 'react'

const UserDetails = ({user}) => {
  return (
    <div style={{backgroundColor:'pink',margin:'10px'}}>
       <img src={user.profile} alt={user.name} width="100" />
      <p>Name: {user.name}</p>
      <h3>Role: {user.role}</h3>
      <ul>
        {user.skill.map((s) => <li key={s}>{s}</li>)}
      </ul>

    </div>
  )
}

export default UserDetails