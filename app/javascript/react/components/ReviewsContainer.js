import React from 'react'

const ReviewsContainer = props => {
  let reviews = props.reviews.map( review => {
    return (
      <ReviewTile
        key={review.id}
        id={review.id}
        userId={review.user_id}
        rating={review.rating}
        body={review.body}
        speedData={review.speed_data}
      />
    )
  })

  return (
    {reviews}
  )
}

export default ReviewsContainer
