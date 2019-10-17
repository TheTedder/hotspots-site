import React from 'react';

const LocationTile = props => {
  let protect = props.passwordProtected === null ? "Unknown" : props.passwordProtected.toString()

  return(
    <div className="location-tile">
        <h3>{props.name}</h3>
        <p>{props.city}, {props.state}</p>
        <li>Password protected: {protect}</li>
    </div>
  )
}

export default LocationTile
