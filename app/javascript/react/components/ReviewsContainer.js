import React from 'react'

import ReviewTile from './ReviewTile'

const ReviewsContainer = props => {
  let reviewTiles = props.reviews.map( review => {
    return (
      <div className="grid-x grid-margin-x" key={review.id}>
        <ReviewTile
         id={review.id}
         userId={review.user_id}
         rating={review.rating}
         body={review.body}
         speedData={review.speed_data}
        />
      </div>
    )
  })

  return (
    <div className="review-container grid-container">
      {reviewTiles}
    </div>
  )
}

export default ReviewsContainer