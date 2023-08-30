import './SocialMedia.css';

function SocialMedia( props) {
  return (
    <div className='SocialMedia'>
      <ul>
        {props.social_media.map((media)=>{
          let icon = `${process.env.PUBLIC_URL}/img/${media.icon}.png`
          return (
            <li>
              <div className='element__SocialMedia'>
                <img  src={icon}/>
                {media.media}
              </div>
            </li>
          );})}
      </ul>
    </div>
  );
}

export default SocialMedia;