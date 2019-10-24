import React from 'react'
import { Link } from 'react-router-dom'

const LocationTile = props => {
  let lockIcon
  if ('passwordProtected' in props){
    let lockIconClass = 'fa fa-lock'
    if (!props.passwordProtected){
      lockIconClass += '-open'
    }
    lockIcon = <i className={lockIconClass}></i>
  }

  return(
    <div className="cell small-12 large-6">
      <div className="card location-tile">
        <div className="card-section grid-x grid-padding-x">
          <div className="cell small-2 large-4">
            <img src="https://signarama-toronto.ca/wp-content/uploads/2018/07/Minotti-1.jpg"></img>
          </div>
          <div className="cell small-10 large-8">
            <h3><Link to={`/locations/${props.id}`}>{props.name}</Link></h3>
            <p className="location-index-citystate">{props.city}, {props.state}</p>
            <p>{lockIcon}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationTile
