import './Description.css';

function Description( props) {
  return (
    <div className='Description'>
        <h1>Description</h1>
        <p>{props.description}</p>
    </div>
  );
}

export default Description;