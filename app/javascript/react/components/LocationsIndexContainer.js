import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

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


  let newButton
  if (document.getElementsByName("user-id").length !== 0) {
    newButton = <Link to="/locations/new" className="button">Submit a new HotSpot!</Link>
  }

  const locationTiles = locations.map((location) => {
    return(
      <LocationTile
        key={location.id}
        id={location.id}
        name={location.name}
        city={location.city}
        state={location.state}
        passwordProtected={location.password_protected}
        photoRef={location.photo_ref}
      />
    )
  })

  return(
    <div className="grid-x grid-padding-x">
      <div className="cell">
        {newButton}
      </div>
      {locationTiles}
    </div>
  )
}

export default LocationsIndexContainer
