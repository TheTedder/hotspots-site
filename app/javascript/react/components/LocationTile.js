import React from 'react'
import { Link } from 'react-router-dom'

const LocationTile = props => {
  let protect = props.passwordProtected === null ? "Unknown" : props.passwordProtected.toString()

  return(
    <div className="location-tile">
        <h3>
          <Link to={`/locations/${props.id}`}>{props.name}</Link>
        </h3>
        <p>{props.city}, {props.state}</p>
        <li>Password protected: {protect}</li>
    </div>
  )
}

export default LocationTile
