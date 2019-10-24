class Api::V1::ReviewsController < ApiController
  def create
    location = Location.find(params["location_id"])
    new_review = Review.new(review_params)
    new_review.user = current_user
    new_review.location = location
    if new_review.save
      render json: new_review
    else
      render json: {'errors': new_review.errors.full_messages}
    end
  end

  private
  def review_params
    params.require(:review).permit(:rating, :body, :speed_data)
  end
end
