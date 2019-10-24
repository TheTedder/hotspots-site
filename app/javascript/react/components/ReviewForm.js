import React, { useState } from 'react';

const ReviewForm = (props) => {
  const [newReview, setNewReview] = useState({
    rating: 0,
    body: "",
    speed_data: ""
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

  const clearForm = () => {
    setNewReview({
      rating: 0,
      body: "",
      speed_data: ""
    })
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    let payload = {
      'review': newReview
    }
    props.onReviewSubmitted(payload, clearForm)
  }

  return(
    <div className="callout primary" id="new-form">
      <h3>Add a new review!</h3>
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

      <div className="row">
        <div className="large-12 cell">
          <textarea
            name="body"
            id="body"
            value={newReview.body}
            onChange={handleChange}
            placeholder="Type Your Review"
          />
        </div>
      </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default ReviewForm
