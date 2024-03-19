import "./PersonalProjects.css"

const PersonalProjects = (props) => {
  const personalProjects = props.personal_projects.map(personal_project => {
    return (<div className="personalProjects__project">
      <div className="personalProjects__projectName">
        {personal_project.name}
      </div>
      <div className="personalProjects__projectPoints">
      <ul>
        {personal_project.points.map(point => {
          return <li>
            {point}
          </li>
        })}
      </ul>
      </div>
    </div>
    )
  })
  return (
    <div className="PersonalProjects">
      <div className="personalProjects__title">{props.title}</div>
      <hr/>
      {personalProjects}
    </div>
  )
}

export default PersonalProjects
