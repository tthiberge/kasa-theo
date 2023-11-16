
import { useParams } from 'react-router-dom'
import { useState } from 'react'

import locations from '../data/locations.json'
import Carrousel from '../components/Carrousel'
import Tag from '../components/Tag'
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
    <div className='location-container'>
      <Carrousel
        src={location.cover}
        marginTop="50px"
      />

      <div className='location-informations'>
        <div className='geographical-information'>
          <div>
            <h1>{location.title}</h1>
            <p>{location.location}</p>
          </div>
          <div className='tags'>
            {location.tags.map((tag, index) =>
              <Tag
                key={`${tag}-${index}`}
                tag={tag}
              />
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
          itemType="location"
        />
        <FoldCard
          title="Equipements"
          item={stringifiedArray(location.equipments)}
          unfoldItem={unfoldEquipment}
          setUnfoldItem={setUnfoldEquipment}
          itemType="location"
        />
      </div>
    </div>
  );
}


export default Location
