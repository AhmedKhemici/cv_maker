import Education from './Education/Education';
import Skills from './Skills/Skills';
import './Extras.css';

function Extras( props) {
  return (
    <div className='Extras'>
      <Education educations={props.extras.educations} />
      <Skills skills={props.extras.skills} />
    </div>
  );
}

export default Extras;