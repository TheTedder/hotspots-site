import React, { useState } from 'react';

const ReviewForm = (props) => {
  const [newReview, setNewReview] = useState({
    rating: 0,
    body: "",
    speed_data: 0
  })

  const handleChange = event => {
    setNewReview({
      ...newReview,
      [event.currentTarget.name]:
      event.currentTarget.value
    })
  }

  return(
    <div className="callout primary" id="new-form">
      <h1>Add a new review!</h1>
      <form>

        <label htmlFor="rating">
          Rating:
        </label>
        <select id="rating" name="rating"
          value={newReview.rating} onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label htmlFor="body">
          Description:
        </label>
        <textarea
          name="body"
          id="body"
          value={newReview.body} onChange={handleChange}
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
          value={newReview.speed_data} onChange={handleChange}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default ReviewForm