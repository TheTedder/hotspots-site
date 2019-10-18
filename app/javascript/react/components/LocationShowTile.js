import React from 'react'

import ReviewForm from './ReviewForm'

const LocationShowTile = props => {
  return (
    <div>
      <div>
        <h2 id="show-name">Name: {props.name}</h2>
        <h3 id="show-rating">Rating: {props.rating}</h3>
        <br/>
        <h4>Address: </h4>
        <p id="show-address1">{props.address}</p>
        <p id="show-address2">{props.address2}</p>
        <br/>
        <p id="show-price">Price: {props.price}</p>
        <p id="show-password-protect">Password Protected: {props.password_protected}</p>
      </div>
      <div>
        <ReviewForm />
      </div>
    </div>
  )
}

export default LocationShowTile
