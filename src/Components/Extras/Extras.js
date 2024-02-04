import SocialMedia from './SocialMedia/SocialMedia';
import Skills from './Skills/Skills';
import Languages from './Languages/Languages';
import './Extras.css';

function Extras( props) {
  return (
    <div className='Extras'>
      <SocialMedia socialMedia={props.extras.socialMedia} />
      <Skills skills={props.extras.skills} />
      <Languages languages={props.extras.languages} />
    </div>
  );
}

export default Extras;