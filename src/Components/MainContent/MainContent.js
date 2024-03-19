import Educations from "./Educations/Educations.js"
import Experiences from "./Experiences/Experiences.js"
import Certificates from "./Certificates/Certificates.js"
import PersonalProjects from "./PersonalProjects/PersonalProjects.js"
import "./MainContent.css"

const MainContent = (props) => {
  return (
    <div className="MainContent"> 
        {props.main_content.experiences.length !== 0 && <Experiences experiences={props.main_content.experiences} title={props.language.experiences} />}
        {props.main_content.certificates.length !== 0 && <Certificates certificates={props.main_content.certificates} title={props.language.certificates} />}
        {props.main_content.personal_projects.length !== 0 && <PersonalProjects personal_projects={props.main_content.personal_projects} title={props.language.personal_projects} />}
        {props.main_content.educations.length !== 0 && <Educations educations={props.main_content.educations} title={props.language.educations} />}
    </div>
  )
}

export default MainContent
