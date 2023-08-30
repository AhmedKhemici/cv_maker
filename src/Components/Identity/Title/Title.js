import './Title.css';

function Title(props) {
  return (
    <div className='Title'>
      <h1>{props.identity.full_name}</h1>
      <h2>{props.identity.job_title}</h2>
    </div>
  );
}

export default Title;