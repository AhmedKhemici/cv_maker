import './Languages.css';

function Languages( props) {
  return (
    <div className='Languages'>
      <h1>Languages</h1>
      <ul>
        {props.languages.map((language)=>{
          return (
            <li>
              <div className='element__languages'>
                <div className='language'>{language.language}</div>
                <div className='mastering'>{language.mastering}</div>
              </div>
            </li>
          );})}
      </ul>
    </div>
  );
}

export default Languages;