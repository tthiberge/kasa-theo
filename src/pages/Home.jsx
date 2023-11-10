import locations from '../data/locations.json'
import { Link } from 'react-router-dom'
import home_bg from '../data/home_bg.png'


function Home() {
  return (
    <div className='home_container' >
      <img src={home_bg} alt="landscape banner" className='home-bg' />

      {locations.map(location =>
        <Link
          key={location.id}
          to={`/location/${location.id}`}
        >
          <li>{location.title}</li>
        </Link>
        )}
    </div>
  );
}

export default Home;
