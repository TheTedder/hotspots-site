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
      average_rating: "",
      password_conversion: "",
      price_conversion: ""
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
      debugger
      setLocation(json.location)
      setReviews(json.location.reviews)
    })
  }, [])

  return (
    <div className="show-wrapper">
      <LocationShowTile
        name={locationData.name}
        rating={locationData.average_rating}
        address={locationData.address}
        address2={locationData.address2}
        price={locationData.price_conversion}
        passwordProtected={locationData.password_conversion}
      />
      <ReviewForm />
      <ReviewsContainer
        reviews={reviews}
      />
    </div>
  )
}

export default LocationShowPage
