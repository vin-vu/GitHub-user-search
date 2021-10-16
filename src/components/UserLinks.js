import './UserLinks.css';

function UserLinks({location, twitter, blog, company}) {
  return (
    <div className="user-links">
      <div className="location-blog">
        <p>{location}</p>
        <p>{blog}</p>
      </div>
      <div className="twitter-company">
        <p>{twitter ? twitter : 'Not available'}</p>
        <p>{company ? company : 'Not available'}</p>
      </div>
    </div>
  )
}

export default UserLinks;