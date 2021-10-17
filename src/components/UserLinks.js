import './UserLinks.css';
import LocationIcon from '../icon-components/LocationIcon';

function UserLinks({location, twitter, blog, company}) {
  return (
    <div className="user-links">
      <div className="location-blog">
        <p>{location ? location : 'Not available'}</p>
        <p>{blog ? blog : 'Not available'}</p>
      </div>
      <div className="twitter-company">
        <div className="twitter">
          <LocationIcon />
          <p>{twitter ? twitter : 'Not available'}</p>
        </div>
        <p>{company ? company : 'Not available'}</p>
      </div>


    </div>
    
  )
}

export default UserLinks;