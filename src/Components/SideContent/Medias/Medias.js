import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileScreen, faEnvelope, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import './Medias.css'

function Medias(props) {
  const fontA = {
    "email": faEnvelope,
    "phone": faMobileScreen,
    "whatsapp": faWhatsapp,
    "location": faLocationDot,
    "linkedin": faLinkedin
  }
  const template = <>
    {props.medias.map((media)=>{
      return <div className='media__content'>
        {media.url ?
          <a href={media.url}>
            <div className='media__type'>
              <FontAwesomeIcon
                icon={fontA[media.type]}
              />
            </div>
              <div className='media__value'>
                {media.value}
              </div>
          </a> :
          <>
            <div className='media__type'>
              <FontAwesomeIcon
                icon={fontA[media.type]}
              />
            </div>
              <div className='media__value'>
                {media.value}
              </div>
          </>
        }
      </div>
    })}
  </>
  return (
    <div className='Medias'>
      {template}
    </div>
  )
}

export default Medias
