import './Education.css';

function Education( props) {
  console.log(props.educations)
  return (
    <div className='Education'>
      <h1>Education</h1>
        {props.educations.map((education)=>{
          return (
            <ul>
              <li>
                  {education.degree}
              </li>
              <li>
                  {education.domain}
              </li>
              <li>
                <div className='element__education'>
                  <img src={`${process.env.PUBLIC_URL}/img/calendar.png`}/>
                  {education.date}
                </div>
              </li>
              <li>
                <div className='element__education'>
                  <img src={`${process.env.PUBLIC_URL}/img/pin.png`}/>
                  {education.location}
                </div>
              </li>
            </ul>
          );})
        }
    </div>
  );
}

export default Education;