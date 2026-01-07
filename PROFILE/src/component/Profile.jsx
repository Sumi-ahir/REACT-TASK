import React from 'react'

const Profile = ({ profile, name, role, skill, onSelect }) => {
  return (
    <div style={{ backgroundColor:'blueviolet', margin:'20px', padding:'10px', width:'300px' }}>
      <img src={profile} alt={name} width="100" />
      <p>Name: {name}</p>
      <h3>Role: {role}</h3>
      <ul>
        {skill.map((s) => <li key={s}>{s}</li>)}
      </ul>
      <button onClick={onSelect}>View Profile</button>
    </div>
  )
}

export default Profile
