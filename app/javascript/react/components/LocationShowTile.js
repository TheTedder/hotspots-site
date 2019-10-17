import React from 'react'

const LocationShowTile = props => {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h3>Rating: {props.rating}</h3>
      <br/>
      <h4>Address: </h4>
      <p>{props.address}</p>
      <p>{props.address2}</p>
      <br/>
      <p>Price: {props.price}</p>
      <p>Password Protected: {props.password_protected}</p>
    </div>
  )
}

export default LocationShowTile
