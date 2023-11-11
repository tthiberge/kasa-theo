
import { useParams } from 'react-router-dom'
import { useState } from 'react'

import locations from '../data/locations.json'
import Banner from '../components/Banner'
import FoldCard from '../components/FoldCard'
import RatingScale from '../components/RatingScale'


function Location() {
  const { locationId } = useParams()
  const location = locations.filter(location => location.id === locationId)[0]

  const [unfoldDescription, setUnfoldDescription] = useState(false)
  const [unfoldEquipment, setUnfoldEquipment] = useState(false)

  const stringifiedArray = (array) => {
    return array.map(element => (
        <p> {element} </p>
      ))
  }


  return (
    <div>
      <Banner
      height="415px"
      src={location.cover}
      alt="Location banner"
      />

      <div className='location-informations'>
        <div className='geographical-information'>
          <div>
            <h1>{location.title}</h1>
            <p>{location.location}</p>
          </div>
          <div className='tags'>
            {location.tags.map((tag, index) =>
              <p className='tag' key={`${tag}-${index}`}>{tag}</p>
            )}

          </div>
        </div>

        <div className='min-width' />

        <div className='owner-rating'>
          <div className='owner-information'>
            <div className='owner-name'>
              <p>{location.host.name.split(" ")[1]}</p>
              <p>{location.host.name.split(" ")[0]}</p>
            </div>
            <img src={location.host.picture} alt="host picture" />

          </div>
          <RatingScale scaleValue={location.rating}/>
        </div>
      </div>

      <div className='location-container-foldable'>
        <FoldCard
          title="Description"
          item={location.description}
          unfoldItem={unfoldDescription}
          setUnfoldItem={setUnfoldDescription}
        />
        <FoldCard
          title="Equipements"
          item={stringifiedArray(location.equipments)}
          height="250px"
          unfoldItem={unfoldEquipment}
          setUnfoldItem={setUnfoldEquipment}
        />
      </div>
    </div>
  );
}


export default Location
