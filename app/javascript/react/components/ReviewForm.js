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
<<<<<<< HEAD
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
=======
    <div className="callout primary" id="new-form" >
        <h3 id="review-form-header">Add a new review!</h3>
        <form onSubmit={onSubmitHandler}>

      <div className="grid-x grid-padding-x row">
        <div className="small-4 cell" id="review-form-rating">
          <label htmlFor="rating">
            Rating:
          </label>
          <select id="rating" name="rating" value={newReview.rating} onChange={handleChange}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className="small-4 cell" id="speed-data-block">
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
        </div>
      </div>
>>>>>>> 13f352b5cb36fb4fc19f130728b99f2abb7a79d7

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
