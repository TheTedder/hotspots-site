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
    <div className="cell review-tile card">
      <div className="rating card-divider">
        <p>
          Rating:
          <div className="rating-stars">
            {stars}
          </div>
        </p>
      </div>
      <div className="card-section review-body">
        {props.body}
      </div>
    </div>
  )
}


export default ReviewTile
