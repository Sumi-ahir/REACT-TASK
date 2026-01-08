import React, { useState } from 'react'

const App = () => {
  const skill=['HTML','CSS','JAVA','C++']
  const [active, setactive] = useState([])
  const handleSkill=(skill)=>{
    setactive((old)=>
    old.includes(skill)?old.filter((s)=>s!==skill):[...old,skill]
    )
  }
  return (
    <div className='bg-blue-300 p-4 m-10 flex gap-3 justify-center items-center'> 
    <h2 className='text-xl text-bold'>Skill Game </h2>

    <div className='flex gap-4 '>
    {skill.map((skill)=>{
         const isActive=active.includes(skill);
    return(
      <span className='p-4'
      key={skill}
      onClick={()=>handleSkill(skill)}
      style={{
        backgroundColor:isActive?'green':'white',
        color:isActive?'white':'black'
        
      }}>
        {skill}
      </span>
    )}
       

    )}
    </div>
      <p>skill:
        {active.length>0?active.join(','):'none'}
      </p>
    </div>
  )
}

export default App