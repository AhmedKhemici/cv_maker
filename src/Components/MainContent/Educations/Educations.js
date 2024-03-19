import "./Educations.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons"

const Educations = (props) => {
  const educations = [1].map(education => {
    return (<div className="educations__education">
      <div className="educations__educationDegree">
        Computer Networking and Information Technology master's degree
        {education.degree}
      </div>
      <div className="educations__educationCollege">
        <div className="educations__educationCollegeName">
          Saad Dahleb Blida
          {education.college_name}
        </div>
        <a href="https://www.google.com/maps/place/YAssir/@36.7333654,3.030695,15z/data=!4m5!3m4!1s0x0:0x1f49bf588abdd99!8m2!3d36.7333654!4d3.030695?hl=fr">
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </a>
      </div>
      <div className="educations__educationDateGrade">
        <div className="educations__educationDate">
          09/2018 – 09/2019
          {education.date}
        </div>
        <div className="educations__educationGrade">
          GPA 3.5
          {education.grade}
        </div>
      </div>
      <div className="educations__educationProjects">
          <span>
            Project
          </span>
          <ul>
          {
            [1].map(project => {
              return <li>
                Contour Parallel Offset and laser pathing
                using the Algorithm for Pocketing in order to
                fill 2D Motifs
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
      <div className="educations__title">EDUCATIONS</div>
      <hr/>
      {educations}
    </div>
  )
}

export default Educations
