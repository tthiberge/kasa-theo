

function Banner( { height, text, src, alt } ) {
  return (
    <div className='banner-picture-text' style={{'background-image': `url(${src})`, height: `${height}`}} >
      <p>{text}</p>
    </div>
  );
}

export default Banner;
