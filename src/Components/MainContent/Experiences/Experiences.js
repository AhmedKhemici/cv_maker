import "./Experiences.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons"

const Experiences = (props) => {
  const experiences = props.experiences.map(experience => {
    return <div className="experiences__experience">
      <div className="experiences__experienceJobTitle">
        {experience.job_title}
      </div>
      <div className="experiences__experienceCompany">
        <div className="experiences__experienceCompanyName">
          {experience.company_name}
        </div>
        <a href={experience.company_url}>
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </a>
      </div>
      <div className="experiences__experienceDateCountry">
        <div className="experiences__experienceDate">
          {experience.date}
        </div>
        <div className="experiences__experienceCountry">
          {experience.location}
        </div>
      </div>
      <div className="experiences__experiencePoints">
        <ul>
        {experience.points.map(point => {
          return <li>
            {point}
          </li>
        })}
        </ul>
      </div>
    </div>
  })
  return (
    <div className="Experiences">
      <div className="experiences__title">WORK EXPERIENCE</div>
      <hr/>
      {experiences}
    </div>
  )
}

export default Experiences
