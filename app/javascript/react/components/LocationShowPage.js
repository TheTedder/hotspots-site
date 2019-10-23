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
      rating: null,
      password_protected: null,
      price: null
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
  //
  // const onReviewSubmitted = (newReview, formClear) => {
  //   let token = document.getElementsByName("csrf-token")[0].content
  //   let fixedToken = encodeURIComponent(token)
  //   fetch(`/api/v1/locations/${props.match.params.id}/reviews?authenticity_token=${fixedToken}`, {
  //     method: 'POST',
  //     credentials: "same-origin",
  //     header: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(newReview)
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       return response;
  //     } else {
  //       let errorMessage = `${response.status} (${response.statusText})`,
  //        error = new Error(errorMessage);
  //       throw(error);
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(reviewBody => {
  //     if (reviewBody.review.error_messages.length === 0) {
  //       formClear()
  //       setReviews([...reviews, reviewBody.review])
  //     } else {
  //       setErrorList(reviewBody.review.error_messages)
  //     }
  //   })
  //   .catch(error => console.error(`Error in fetch: ${error.message}`))
  //   }

  const onReviewSubmitted = (newReview, formClear) => {
    // let token = document.getElementsByName("csrf-token")[0].content
    // let fixedToken = encodeURIComponent(token)
    fetch(`/api/v1/locations/${props.match.params.id}/reviews.json`, {
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
      if (reviewBody.review.error_messages.length === 0) {
        formClear()
        setReviews([...reviews, reviewBody.review])
      } else {
        setErrorList(reviewBody.review.error_messages)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
    }

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
