import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import LocationShowTile from './LocationShowTile'

const LocationShowPage = props => {

  return (
    <LocationShowTile
      location_id={props.match.params.id}
    />
  )
}

export default LocationShowPage
