import "./Educations.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons"

const Educations = (props) => {
  const educations = props.educations.map(education => {
    return (<div className="educations__education">
      <div className="educations__educationDegree">
        {education.degree}
      </div>
      <div className="educations__educationCollege">
        <div className="educations__educationCollegeName">
          {education.college_name}
        </div>
        {education.college_url !== undefined && <a href={education.college_url}>
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </a>}
      </div>
      <div className="educations__educationDateGrade">
        <div className="educations__educationDate">
          {education.date}
        </div>
        <div className="educations__educationGrade">
          {education.grade}
        </div>
      </div>
      <div className="educations__educationProjects">
          <span>
            {props.project}
          </span>
          <ul>
          {
            education.projects.map(project => {
              return <li>
                {project}
              </li>
            })
          }
          </ul>
      </div>
    </div>
    )
  })
  return (
    <div className="Educations">
      <div className="educations__title">{props.title}</div>
      <hr/>
      {educations}
    </div>
  )
}

export default Educations
