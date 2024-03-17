import Educations from './Educations/Educations.js'
import Experiences from './Experiences/Experiences.js'
import Certificates from './Certificates/Certificates.js'
import PersonalProjects from './PersonalProjects/PersonalProjects.js'
import './MainContent.css'

const MainContent = (props) => {
  return (
    <div className='MainContent'> 
        <Experiences experiences={props.main_content.experiences}/>
        <Certificates certificates={props.main_content.certificates}/>
        <PersonalProjects personal_projects={props.main_content.personal_projects}/>
        <Educations educations={props.main_content.educations}/>
    </div>
  )
}

export default MainContent
