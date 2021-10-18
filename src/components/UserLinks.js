import './UserLinks.css';
import TwitterIcon from '../icon-components/TwitterIcon';
import LocationIcon from '../icon-components/LocationIcon';
import BlogIcon from '../icon-components/BlogIcon';
import CompanyIcon from '../icon-components/CompanyIcon';

function UserLinks({location, twitter, blog, company}) {
  return (
    <div className="user-links">
      <div className="location-blog">
        <div className="location">
          <LocationIcon />
          <p>{location ? location : 'Not available'}</p>
        </div>
        <div className="blog">
          <BlogIcon />
          <p>{blog ? blog : 'Not available'}</p>
        </div>
      </div>
      <div className="twitter-company">
        <div className="twitter">
          <TwitterIcon />
          <p>{twitter ? twitter : 'Not available'}</p>
        </div>
        <div className="company">
          <CompanyIcon />
          <p>{company ? company : 'Not available'}</p>
        </div>
      </div>
    </div>
    
  )
}

export default UserLinks;