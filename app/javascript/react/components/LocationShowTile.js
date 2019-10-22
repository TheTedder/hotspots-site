import React from 'react'

const LocationShowTile = props => {
  return (
    <div className="cell location-tile card grid-x">
      <div className="header card-divider grid-x location-header">
        <div className="location cell small-6 float-left">
          <h2 id="show-name">Name: {props.name}</h2>
        </div>
      </div>

      <div className="cell location small-6 float-right card-section body">
        <h3 id="show-rating">Rating: {props.rating}</h3>
        <br/>
        <h4>Address: </h4>
        <p id="show-address1">{props.address}</p>
        <p id="show-address2">{props.address2}</p>
        <br/>
        <p id="show-price">Price: {props.price}</p>
        <p id="show-password-protect">Password Protected: {props.passwordProtected}</p>
      </div>
  </div>
  )
}

export default LocationShowTile
