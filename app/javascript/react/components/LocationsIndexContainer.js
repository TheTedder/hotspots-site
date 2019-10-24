import React, { useState, useEffect } from 'react';

import LocationTile from "./LocationTile"

const LocationsIndexContainer = props => {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    fetch('/api/v1/locations')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      setLocations(body.locations)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const locationTiles = locations.map((location) => {
    return(
      <LocationTile
        key={location.id}
        id={location.id}
        name={location.name}
        city={location.city}
        state={location.state}
        passwordProtected={location.password_protected}
      />
    )
  })

  return(
    <div className="grid-x grid-padding-x">
      {locationTiles}
    </div>
  )
}

export default LocationsIndexContainer
