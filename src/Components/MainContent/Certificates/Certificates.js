import './Certificates.css'

const Certificates = (props) => {
  const certificates = props.certificates.map(certificate => {
    return (<div className='certificates__certificate'>
      {certificate.name+" ("+certificate.date+")"}
    </div>
    )
  })
  return (
    <div className='Certificates'>
      <div className="certificates__title">CERTIFICATES</div>
      <hr/>
      {certificates}
    </div>
  )
}

export default Certificates
