import './Description.css'

const Description = (props) => {
  return (
    <div className="Description">
      <div className="description__content">
        <div className="description__fullname">
          {props.name}
        </div>
        <div className="description__profession">
          {props.profession}
        </div>
        <hr/>
        <div className="description__text">
          {props.description}
        </div>
      </div>
    </div>
  )
}

export default Description
