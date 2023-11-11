

function Carroussel( { height, text, src } ) {
  return (
    <div className='carroussel-picture' style={{'background-image': `url(${src})`, height: `${height}`}} >
      <p>{text}</p>
    </div>
  );
}

export default Carroussel;
