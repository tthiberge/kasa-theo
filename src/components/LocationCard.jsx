function LocationCard({ title, cover }) {
  return (
    <div
      className="location-container" >
      <img
        className="location-item"
        src={cover}
        alt="location cover"
      />
        <p className="location-title">{title}</p>
    </div>
  );
}

export default LocationCard;
