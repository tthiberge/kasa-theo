import locations from '../data/locations.json'
import { Link } from 'react-router-dom'
import home_bg from '../data/home_bg.png'
import LocationCard from '../components/LocationCard'
import Banner from '../components/Banner'


function Home() {
  return (
    <div className='home_container' >
      <Banner
        height="223px"
        src={home_bg}
        text="Chez vous, partout, ailleurs"
      />
      <div className='subgrid'>
        <div className='locations-grid'>
          {locations.map(location =>
            <Link
              key={location.id}
              to={`/location/${location.id}`}
              className='link-item'
            >
              <LocationCard
                title={location.title}
              />
            </Link>
            )}
        </div>
      </div>
    </div>
  );
}

export default Home;
