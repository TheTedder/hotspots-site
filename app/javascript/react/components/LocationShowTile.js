import React from 'react'

const LocationShowTile = props => {
  let passwordProtectedBadge
  if (props.passwordProtected){
    passwordProtectedBadge = (
      <div className="location-show-password-protected">
        <p>
          <span className="alert label">
            Password Required
          </span>
        </p>
      </div>
    )
  }

  let image
  if (props.photoRef !== null) {
    image = <img src={props.photoRef}></img>
  }

  return (
    <div>
      <div className="location-tile primary card cell">
        <div className="card-divider text-center location-show-header" id="show-name">
          <div className="float-center">
            <h2>{props.name}</h2>
          </div>
        </div>
        <div className="card-section grid-x grid-padding-x">
          <div className="location-show-info cell small-12 medium-6">
            <div className="location-show-address">
              <p>{props.address}</p>
              <p>{props.address2}</p>
            </div>
            <hr/>
            <div className="location-show-rating">
              <p>Overall Rating: {props.rating}</p>
            </div>
            {passwordProtectedBadge}
            <div className="location-show-price">
              <p>{props.price}</p>
            </div>
          </div>
          <div className="cell small-12 medium-6">
            {image}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationShowTile
