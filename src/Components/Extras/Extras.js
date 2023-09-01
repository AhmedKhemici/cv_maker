import Education from './Education/Education';
import Skills from './Skills/Skills';
import Languages from './Languages/Languages';
import './Extras.css';

function Extras( props) {
  return (
    <div className='Extras'>
      <Education educations={props.extras.educations} />
      <Skills skills={props.extras.skills} />
      <Languages languages={props.extras.languages} />
    </div>
  );
}

export default Extras;