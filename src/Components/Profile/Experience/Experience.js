import './Experience.css';

function Experience( props) {
  return (
    <div className='Experience'>
      <h1>Work Experiences</h1>
      {props.experiences.map((experience)=>{
          return (
                <div className='experience__element'>
                  {experience.company_name}
                  <img src={`${process.env.PUBLIC_URL}/img/pin.png`}/>
                  {experience.location}
                  {experience.job_title}
                  <img src={`${process.env.PUBLIC_URL}/img/calendar.png`}/>
                  {experience.date}
                  <ul>
                  {experience.worked_on.map((work)=>{
                    return(<li>{work}</li>);
                  })}
                  </ul>
                </div>
          );})
        }
    </div>
  );
}

export default Experience;