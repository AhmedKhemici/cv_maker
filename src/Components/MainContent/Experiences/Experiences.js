import './Experiences.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
import { text } from '@fortawesome/fontawesome-svg-core'

const Experiences = (props) => {
  const experiences = [1,2].map(experience => {
    return <div className='experiences__experience'>
      <div className='experiences__experienceJobTitle'>
        Data Scientist
        {/* {experience.job_title} */}
      </div>
      <div className='experiences__experienceCompany'>
        <div className='experiences__experienceCompanyName'>
          Yassir
        </div>
        <a href="https://www.google.com/maps/place/YAssir/@36.7333654,3.030695,15z/data=!4m5!3m4!1s0x0:0x1f49bf588abdd99!8m2!3d36.7333654!4d3.030695?hl=fr">
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </a>
        {/* {experience.company_name} */}
      </div>
      <div className='experiences__experienceDateCountry'>
        <div className='experiences__experienceDate'>
          04/2020 – Present
        </div>
        <div className='experiences__experienceCountry'>
          Algeria
        </div>
        {/* {experience.company_name} */}
      </div>
      <div className='experiences__experiencePoints'>
        <ul>
        {[1,2].map(points => {
          return <li>
              {``}
          </li>
        })}
        </ul>
      </div>
    </div>
  })

  return (
    <div className='Experiences'>
      <div className="experiences__title">WORK EXPERIENCE</div>
      <hr/>
      {experiences}
    </div>
  )
}

export default Experiences
