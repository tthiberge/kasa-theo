function LocationCard({ title, pictures }) {
  return (
    <div
      className="location-item-underlay" >
      <li
        className="location-item"
        style={{
        backgroundImage: `url(${pictures[0]})`,
        objectFit: `cover`,
        objectPosition: `bottom`
      }}>
        <p>{title}</p>
      </li>
    </div>
  );
}

export default LocationCard;
