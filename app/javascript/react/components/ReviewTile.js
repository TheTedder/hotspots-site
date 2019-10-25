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

  let speed
  if (props.speedData !== '' && props.speedData !== null){
    speed = `Speed: ${props.speedData} kb/s`
  }

  return (
    <div className="cell review-tile card">
      <div className="header card-divider grid-x">
        <div className="rating cell small-6 float-left">
          Rating: {stars}
        </div>
        <p className="speed-data-result cell small-6 text-right">
          {speed}
        </p>
      </div>
      <div className="card-section review-body">
        {props.body}
      </div>
    </div>
  )
}

export default ReviewTile
