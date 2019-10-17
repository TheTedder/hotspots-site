import React, { useState, useEffect } from 'react'
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

  useEffect( () => {
    fetch(`/api/v1/locations/${props.location_id}`)
    .then(response => {
      if (response.ok){
        return response
      } else {
        throw new Error(`${response.status} ${response.statusText}`)
      }
    })
    .then(body => {
      return body.json()
    })
    .then(json => {
      let newLocation = {
        name: json.location.name,
        rating: json.location.rating,
        address: json.location.address,
        address2: json.location.address2,
        password_protected: null,
        price: null
      }
      if (json.location.price !== null && json.location.price !== ""){
        newLocation.price = `\$${(Number.parseInt(json.location.price) /100).toFixed(2)}`
      }
      if (json.location.password_protected !== null && json.location.password_protected !== ""){
        newLocation.password_protected = {
          true: 'yes',
          false: 'no'
        }[json.location.password_protected]
      }
      setLocation(newLocation)
    })
  }, [])

  return (
    <div>
      <h1>Name: {location.name}</h1>
      <h2>Rating: {location.rating}</h2>
      <br/>
      <p>Address: {location.address}</p>
      <p>{location.address2}</p>
      <br/>
      <p>Price: {location.price}</p>
      <p>Password Protected: {location.password_protected}</p>
    </div>
  )
}

export default LocationShowTile
