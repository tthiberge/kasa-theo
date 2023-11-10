import location_bg_desktop from '../data/location_bg_desktop.png'
import location_bg_mobile from '../data/location_bg_mobile.png'
import Banner from '../components/Banner'


function Location() {
  return (
    <Banner
    height="415px"
    src={location_bg_desktop}
    alt="Location banner"
    />
  );
}

export default Location
