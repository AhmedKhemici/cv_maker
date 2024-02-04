import './Title.css';

function Title(props) {
  return (
    <div className='Title'>
      <div className='title__container'>
        <div className='profile__photo'>
          <img src={`${process.env.PUBLIC_URL}/img/${props.identity.profile_picture}.jpg`}/>
        </div>
      </div>
      <div className='title__name'>
        <h1>{props.identity.full_name}</h1>
        <h2>{props.identity.job_title}</h2>
      </div>
    </div>
  );
}

export default Title;