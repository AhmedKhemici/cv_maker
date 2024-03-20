import Photo from "./Photo/Photo.js"
import Description from "./Description/Description.js"
import "./Profile.css"

const Profile = (props) => {
  const fullName = props.profile.first_name+" "+props.profile.last_name
  return (
    <div className="Profile">
      {props.profile.profile_photo !== undefined && <Photo profile_photo={props.profile.profile_photo}/>}
      <Description 
        name={fullName}
        profession={props.profile.profession}
        description={props.profile.description}
      />
    </div>
  )
}

export default Profile
