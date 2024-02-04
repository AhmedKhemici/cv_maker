import Title from './Title/Title';
import './Identity.css';

function Identity( props) {
  return (
    <div className='Identity'>
      <Title identity={props.identity}/>
    </div>
  );
}

export default Identity;