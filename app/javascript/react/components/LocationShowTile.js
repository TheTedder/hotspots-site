import React from 'react'

const LocationShowTile = props => {
  let passwordProtectedBadge
  if (props.passwordProtected === 'yes'){
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

  return (
    <div>
      <div className="location-tile primary card cell" style={{width: '100%'}}>
        <div className="card-divider small-centered text-center location-show-header" id="show-name">
          <h2>{props.name}</h2>
        </div>
        <div className="card-section grid-x grid-padding-x">
          <div className="location-show-info cell small-12 medium-6">
            <div className="location-show-address">
              <p>{props.address}</p>
              <p>{props.address2}</p>
            </div>
            <hr/>
            <div className="location-show-rating">
              <p>Overall Rating: {props.rating}/5</p>
            </div>
            {passwordProtectedBadge}
            <div className="location-show-price">
              <p>{props.price}</p>
            </div>
          </div>
          <div className="cell small-12 medium-6">
            <img id="store-image" src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Mon_Ami_Boulangerie_%288119944759%29.jpg" alt="city-hall"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationShowTile
