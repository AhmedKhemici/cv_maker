import './Skills.css'

function Skills(props) {
  const skills = <div>
    {props.skills.map((skill)=>{
      return <div className='skills__content'>
        <div className='skills__name'>
          {skill.name}
        </div>
        <div className='skills__tools'>
          {skill.tools}
        </div>
      </div>
    })}
  </div>
  return (
    <div className='Skills'>
      <span className='skills__title'>SKILLS</span>
      <hr/>
      {skills}
    </div>
  )
}

export default Skills
