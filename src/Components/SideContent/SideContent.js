import Medias from './Medias/Medias.js'
import Skills from './Skills/Skills.js'
import Languages from './Languages/Languages.js'
import './SideContent.css'

const SideContent = (props) => {
  return (
    <div className='SideContent'>
        {props.side_content.medias.length !== 0 && <Medias medias={props.side_content.medias}/>}
        {props.side_content.skills.length !== 0 && <Skills skills={props.side_content.skills}/>}
        {props.side_content.languages.length !== 0 && <Languages languages={props.side_content.languages}/>}
    </div>
  )
}

export default SideContent
