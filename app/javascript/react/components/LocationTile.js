import React from 'react';
import { Link } from 'react-router-dom'

const LocationTile = props => {
  let lockIcon
  if (props.passwordProtected !== null){
    let lockIconClass = 'fa fa-lock'
    if (!props.passwordProtected){
      lockIconClass += '-open'
    }
    lockIcon = <i className={lockIconClass}></i>
  }

  let dollarIcon
  if (props.price !== null) {
    if (props.price > 0) {
      dollarIcon = <i className="fa fa-dollar-sign"></i>
    }
  }

  let image
  if (props.photoRef !== null) {
    image = <img className="location-tile-image" src={props.photoRef}></img>
  }

  return(
    <div className="cell small-12 large-6">
      <div className="card location-tile">
        <div className="card-section grid-x grid-padding-x">
          <div className="cell small-2 large-4">
            {image}
          </div>
          <div className="cell small-10 large-8">
            <h3><Link to={`/locations/${props.id}`}>{props.name}</Link> {lockIcon} {dollarIcon}</h3>
            <p className="location-index-citystate">{props.city}, {props.state}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationTile
