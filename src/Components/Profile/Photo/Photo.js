import './Photo.css'

const Photo = (props) => {
  return (
    <div className='Photo'>
      <img src={`${process.env.PUBLIC_URL}/img/${props.profile_photo}.jpg`}/>
    </div>
  )
}

export default Photo
