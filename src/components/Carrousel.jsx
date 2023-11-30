import { useState } from 'react'
import arrow_prev from '../data/arrow_prev.png'
import arrow_next from '../data/arrow_next.png'


function Carroussel( { pictures, marginTop, marginBottom } ) {
  const [pictureUrl, setPictureUrl] = useState(pictures[0])

  const pictureIndex = (url) => {
    return pictures.indexOf(url)
  }

  const nextPicture = () => {
    const currentIndex = pictureIndex(pictureUrl) // Je récupère l'index du state

    const url = pictures[currentIndex + 1] || pictures[0] // Je trouve la prochaine photo
    setPictureUrl(url) // Je mets cette nouvelle photo dans le state
  }

  const prevPicture = () => {
    const currentIndex = pictureIndex(pictureUrl)

    const url = pictures[currentIndex - 1] || pictures[pictures.length - 1]
    setPictureUrl(url)
  }

  const isMobile = window.innerWidth < 640

  return (
    <div className='carroussel-picture' style={{marginTop: `${marginTop}`, marginBottom: `${marginBottom}`}} >
      <img className="carrousel-background" src={pictureUrl} alt="background location" />
      <img
        src={arrow_prev}
        className='arrow-prev'
        onClick={() => prevPicture()}
        alt="show previous"
        />

      {
        !isMobile ? <p className='text-on-carrousel'>{pictureIndex(pictureUrl) + 1} / {pictures.length}</p> : null
      }

      <img
        src={arrow_next}
        className='arrow-next'
        onClick={() => nextPicture()}
        alt="show next"
        />
    </div>
  );
}

export default Carroussel;
