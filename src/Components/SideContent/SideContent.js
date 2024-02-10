import Medias from './Medias/Medias.js'
import Skills from './Skills/Skills.js'
import Languages from './Languages/Languages.js'
import './SideContent.css'

const SideContent = (props) => {
  return (
    <div className='SideContent'>
        <Medias medias={props.media}/>
        <Skills skills={props.skills}/>
        <Languages languages={props.languages}/>
    </div>
  )
}

export default SideContent
