import React from 'react'

import ReviewTile from './ReviewTile'

const ReviewsContainer = props => {
  let reviewTiles = props.reviews.map( review =>
    (
      <ReviewTile
        key={review.id}
        id={review.id}
        userId={review.user_id}
        rating={review.rating}
        body={review.body}
        speedData={review.speed_data}
      />
    )
  )

  return (
    <div className="review-container row">
      {reviewTiles}
    </div>
  )
}

export default ReviewsContainer
