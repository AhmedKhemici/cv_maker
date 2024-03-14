import Educations from './Educations/Educations.js'
import Experiences from './Experiences/Experiences.js'
import Certificates from './Certificates/Certificates.js'
import PersonalProjects from './PersonalProjects/PersonalProjects.js'
import './MainContent.css'

const MainContent = (props) => {
  return (
    <div className='MainContent'> 
        <Experiences experiences={props.experiences}/>
        <Certificates certificates={props.certificates}/>
        <PersonalProjects personal_projects={props.personal_projects}/>
        <Educations educations={props.educations}/>
    </div>
  )
}

export default MainContent
