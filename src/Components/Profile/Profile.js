import Description from './Description/Description'
import Experience from './Experience/Experience'
import './Profile.css';

function Profile( props) {
  return (
    <div className='Profile'>
        <Description description={props.profile.description}/>
        <Experience experiences={props.profile.experiences}/>
    </div>
  );
}

export default Profile;