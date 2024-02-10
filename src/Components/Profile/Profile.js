import ProfilePhoto from './ProfilePhoto/ProfilePhoto.js'
import Description from './Description/Description.js'
import './Profile.css'

const Profile = (props) => {
  const fullName = props.first_name+" "+props.last_name
  return (
    <div className='Profile'>
      <ProfilePhoto profile_photo={props.profile_photo}/>
      <Description 
        name={fullName}
        profession={props.profession}
        description={props.description}
      />
    </div>
  )
}

export default Profile
