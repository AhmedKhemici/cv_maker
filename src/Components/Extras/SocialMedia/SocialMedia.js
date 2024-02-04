import React from 'react';
import './SocialMedia.css';

const SocialMedia = ( props) => {
return (
    <div className='SocialMedia'>
      <h1></h1>
      <ul>
        {props.socialMedia.map((media)=>{
          let icon = `${process.env.PUBLIC_URL}/img/${media.icon}.png`
          return (
            <li>
              <div className='element__socialMedia'>
                {/* {media.url != null } */}
                <img src={icon}/>
                <a href={media.url}>{media.media}</a>
              </div>
            </li>
          );})}
      </ul>
    </div>
    );
}

export default SocialMedia
