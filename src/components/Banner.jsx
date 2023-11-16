

function Banner( { height, text1, text2, src, marginTop, marginBottom } ) {
  const isMobile = window.innerWidth < 640

  return (
    <div className='banner-picture-text' style={{backgroundImage: `url(${src})`, height: `${height}`, marginTop: `${marginTop}`, marginBottom: `${marginBottom}`}} >
      {
        isMobile ? <p>{text1} <br />{text2}</p> : <p>{`${text1} ${text2}`}</p>
      }
    </div>
  );
}

export default Banner;
