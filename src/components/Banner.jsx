

function Banner( { height, text, src, marginTop, marginBottom } ) {
  return (
    <div className='banner-picture-text' style={{backgroundImage: `url(${src})`, height: `${height}`, marginTop: `${marginTop}`, marginBottom: `${marginBottom}`}} >
      <p>{text}</p>
    </div>
  );
}

export default Banner;
