import './Skills.css';

function Skills( props) {
  return (
    <div className='Skills'>
      <h1>Compétences</h1>
      <ul>
        {props.skills.map((skill)=>{
          let icon = `${process.env.PUBLIC_URL}/img/${skill.icon}.png`
          return (
            <li>
              <div className='element__Skills'>
                <img  src={icon}/>
                {skill.skill}
              </div>
            </li>
          );})}
      </ul>
    </div>
  );
}

export default Skills;