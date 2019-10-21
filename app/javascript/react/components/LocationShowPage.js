import React, { useState, useEffect } from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import LocationShowTile from './LocationShowTile'
import ReviewForm from './ReviewForm'
import ReviewsContainer from './ReviewsContainer'

const LocationShowPage = props => {
  let [locationData, setLocation] = useState(
    {
      name: "",
      address: "",
      address2: "",
      rating: null,
      password_protected: null,
      price: null
    }
  )

  let [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch(`/api/v1/locations/${props.match.params.id}`)
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
        let password_protected_options = {
          true: 'yes',
          false: 'no'
        }
        newLocation.password_protected = password_protected_options[json.location.password_protected]
      }
      setLocation(newLocation)
      setReviews(json.location.reviews)
    })
  }, [])

  return (
    <div className="show-wrapper">
      <LocationShowTile
        name={locationData.name}
        rating={locationData.rating}
        address={locationData.address}
        address2={locationData.address2}
        price={locationData.price}
        passwordProtected={locationData.password_protected}
      />
      <ReviewForm />
      <ReviewsContainer
        reviews={reviews}
      />
    </div>
  )
}

export default LocationShowPage
