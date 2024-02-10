import Educations from './Educations/Educations.js'
import Experiences from './Experiences/Experiences.js'
import Certificates from './Certificates/Certificates.js'
import PersonalProjects from './PersonalProjects/PersonalProjects.js'
import './MainContent.css'

const MainContent = (props) => {
  return (
    <div className='MainContent'> 
        <Educations educations={props.educations}/>
        <Experiences experiences={props.experiences}/>
        <Certificates certificates={props.certificates}/>
        <PersonalProjects personal_projects={props.personal_projects}/>
    </div>
  )
}

export default MainContent
