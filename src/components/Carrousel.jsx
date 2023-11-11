

function Carroussel( { src, marginTop, marginBottom } ) {
  return (
    <div className='carroussel-picture' style={{backgroundImage: `url(${src})`, marginTop: `${marginTop}`, marginBottom: `${marginBottom}`}} >
    </div>
  );
}

export default Carroussel;
