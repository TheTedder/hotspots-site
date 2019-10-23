import React from 'react'

const LocationShowTile = props => {
  debugger
  return (
    <div>
      <h2 id="show-name">{props.name}</h2>
      <h3 id="show-rating">Rating: {props.rating}</h3>
      <br/>
      <h4>Address: </h4>
      <p id="show-address1">{props.address}</p>
      <p id="show-address2">{props.address2}</p>
      <br/>
      <p id="show-price">Price: {props.price}</p>
      <p id="show-password-protect">Password Protected: {props.passwordProtected}</p>
    </div>
  )
}

export default LocationShowTile
