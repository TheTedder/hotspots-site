import React from 'react'

const LocationShowTile = props => {
  let locationData = props.locationData
  return (
    <div>
      <h2>Name: {locationData.name}</h2>
      <h3>Rating: {locationData.rating}</h3>
      <br/>
      <h4>Address: </h4>
      <p>{locationData.address}</p>
      <p>{locationData.address2}</p>
      <br/>
      <p>Price: {locationData.price}</p>
      <p>Password Protected: {locationData.password_protected}</p>
    </div>
  )
}

export default LocationShowTile
