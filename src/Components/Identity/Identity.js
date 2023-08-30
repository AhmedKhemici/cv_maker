import Title from './Title/Title';
import SocialMedia from './SocialMedia/SocialMedia';
import './Identity.css';

function Identity( props) {
  return (
    <div className='Identity'>
      <Title identity={props.identity}/>
      <SocialMedia social_media={props.identity.social_media}/>
    </div>
  );
}

export default Identity;