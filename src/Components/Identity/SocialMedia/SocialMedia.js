import './SocialMedia.css';

function SocialMedia( props) {
  return (
    <div className='SocialMedia'>
      <ul>
        {props.social_media.map((media)=>{
          let icon = `${process.env.PUBLIC_URL}/img/${media.icon}.png`
          let component
          if(media.url === null){
            component = (
              <li>
                <div className='element__SocialMedia'>
                  <img  src={icon}/>
                  {media.media}
                </div>
              </li>
            );
          }
          else{
            component = (
              <li>
                <div className='element__SocialMedia'>
                  <img  src={icon}/>
                  <a href={media.url}>{media.media}</a>
                </div>
              </li>
            );
          }
          return component;})}
      </ul>
    </div>
  );
}

export default SocialMedia;