import Medias from './Medias/Medias.js'
import Skills from './Skills/Skills.js'
import Languages from './Languages/Languages.js'
import './SideContent.css'

const SideContent = (props) => {
  return (
    <div className='SideContent'>
      {props.side_content.medias!== undefined && <Medias medias={props.side_content.medias}/>}
      {props.side_content.skills !== undefined && <Skills skills={props.side_content.skills} title={props.language.skills}/>}
      {props.side_content.languages !== undefined && <Languages languages={props.side_content.languages} title={props.language.languages}/>}
    </div>
  )
}

export default SideContent
