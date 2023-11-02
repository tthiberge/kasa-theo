import locations from '../data/locations.json'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div >
      Page d'accueil
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
