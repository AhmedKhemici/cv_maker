import './Title.css';

function Title(props) {
  return (
    <div className='Title'>
      <div className='title__container'>
        <h1>{props.identity.full_name}</h1>
        <div className='profile__photo'></div>
      </div>
      <div>
      <h2>{props.identity.job_title}</h2>
      </div>
    </div>
  );
}

export default Title;