import React from 'react'

const ReviewTile = props => {
  let stars = []

  for (let i = 0; i < 5; i++){
    let starClass = 'fa fa-star '
    if (i < props.rating){
      starClass += 'gold-star'
    } else{
      starClass += 'grey-star'
    }

    stars.push(
      <i className={starClass} key={i}></i>
    )
  }
  return (
    <div className="review-tile row">
      <div className="row rating">
        Rating: {stars}
      </div>
      <div className="review-tile-body row">
        {props.body}
      </div>
    </div>
  )
}


export default ReviewTile
