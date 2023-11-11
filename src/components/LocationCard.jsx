

function LocationCard( { title } ) {
  return (
    <div className="location-item-underlay">
      <li className='location-item'>
        <p>{ title }</p>
      </li>
    </div>
  );
}

export default LocationCard;
