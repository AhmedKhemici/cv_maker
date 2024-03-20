import Educations from "./Educations/Educations.js"
import Experiences from "./Experiences/Experiences.js"
import Certificates from "./Certificates/Certificates.js"
import PersonalProjects from "./PersonalProjects/PersonalProjects.js"
import "./MainContent.css"

const MainContent = (props) => {
  return (
    <div className="MainContent" > 
      {props.main_content.experiences !== undefined && <Experiences experiences={props.main_content.experiences} title={props.language.experiences} />}
      {props.main_content.certificates !== undefined && <Certificates certificates={props.main_content.certificates} title={props.language.certificates} />}
      {props.main_content.personal_projects !== undefined && <PersonalProjects personal_projects={props.main_content.personal_projects} title={props.language.personal_projects} />}
      {props.main_content.educations !== undefined && <Educations educations={props.main_content.educations} title={props.language.educations} />}
    </div>
  )
}

export default MainContent
