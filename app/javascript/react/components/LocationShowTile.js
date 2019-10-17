import React, { useState } from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

const LocationShowTile = props => {
  let [location, setLocation] = useState(
    {
      name: "",
      address: "",
      address2: "",
      rating: null,
      password_protected: null,
      price: null
    }
  )

  return (
    <div>
    </div>
  )
}

export default LocationShowTile
