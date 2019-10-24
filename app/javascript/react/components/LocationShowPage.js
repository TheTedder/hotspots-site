import React, { useState, useEffect } from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import LocationShowTile from './LocationShowTile'
import ReviewForm from './ReviewForm'
import ReviewsContainer from './ReviewsContainer'

const LocationShowPage = props => {
  const [errorList, setErrorList] = useState([])
  const [reviews, setReviews] = useState([])
  const [locationData, setLocation] = useState(
    {
      name: "",
      address: "",
      address2: "",
      average_rating: "",
      password_protected: null,
      price_conversion: ""
    }
  )

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
      setLocation(json.location)
      setReviews(json.location.reviews)
    })
  }, [])

  const onReviewSubmitted = (newReview, formClear) => {
    fetch(`/api/v1/locations/${props.match.params.id}/reviews`, {
      method: 'POST',
      credentials: "same-origin",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReview)
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
         error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(reviewBody => {
      if (reviewBody.review){
        formClear()
        setErrorList([])
        setReviews([...reviews, reviewBody.review])
      } else {
        setErrorList(reviewBody.errors)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
    }

  return (
    <div className="show-wrapper">
      <LocationShowTile
        name={locationData.name}
        rating={locationData.average_rating}
        address={locationData.address}
        address2={locationData.address2}
        price={locationData.price_conversion}
        passwordProtected={locationData.password_protected}
      />
      {errorList.join(" and ")}
      <ReviewForm
        onReviewSubmitted={onReviewSubmitted}
      />
      <ReviewsContainer
        reviews={reviews}
      />
    </div>
  )
}

export default LocationShowPage
