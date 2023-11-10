

function Banner( { height, src, alt } ) {
  return (
    <img src={src} alt={alt} className='home-bg' style={{height: `${height}`}} />
  );
}

export default Banner;
