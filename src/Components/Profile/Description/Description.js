import "./Description.css"

const Description = (props) => {
  return (
    <div className="Description">
      <div className="description__content">
        <span className="description__fullname">
          {props.name}
        </span>
        <span className="description__profession">
          {props.profession}
        </span>
        <hr/>
        <span className="description__text">
          {props.description}
        </span>
      </div>
    </div>
  )
}

export default Description
