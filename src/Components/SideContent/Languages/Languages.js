import './Languages.css'

const Languages = (props) => {
  const languages = <div>
    {props.languages.map((language)=>{
      return <div className='languages__content'>
        <div className='languages__name'>
          {language.name}
        </div>
        <div className='languages__level'>
          {language.level}
        </div>
      </div>
    })}
  </div>
  return (
    <div className='Languages'>
      <span className='languages__title'>LANGUAGES</span>
      <hr/>
      {languages}
    </div>
  )
}

export default Languages
