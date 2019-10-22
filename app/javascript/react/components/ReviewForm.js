import React, { useState } from 'react';

const ReviewForm = (props) => {
  const [newReview, setNewReview] = useState({
    rating: 0,
    body: "",
    speed_data: 0
  })

  const handleStarClick = event => {
    setNewReview({
      ...newReview,
      rating: event.currentTarget.title
    })
  }

  let stars = []

  for (let i = 0; i < 5; i++){
    let starClass = 'fa fa-star '
    if (i < Number.parseInt(newReview.rating)){
      starClass += 'gold-star'
    } else{
      starClass += 'grey-star'
    }

    stars.push(
      <i className={starClass} key={i} onClick={handleStarClick} title={i+1}></i>
    )
  }

  const handleChange = event => {
    setNewReview({
      ...newReview,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    props.onReviewSubmitted(newReview)
  }

  return(
    <div className="callout primary" id="new-form">
      <h2>Add a new review!</h2>
      <form onSubmit={onSubmitHandler}>
        {stars}
        <label htmlFor="body">
          Description:
        </label>
        <textarea
          name="body"
          id="body"
          value={newReview.body}
          onChange={handleChange}
        />

        <label htmlFor="speed_data">
          Speed Data(optional):
        </label>
        <input
          type="number"
          min={0}
          step={0.1}
          name="speed_data"
          id="speed_data"
          value={newReview.speed_data}
          onChange={handleChange}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default ReviewForm
