require 'JSON'
class Api::V1::ReviewsController < ApiController
  protect_from_forgery unless: -> { request.format.json?}

  def create
    binding.pry
    # authenticity token creates spaces on "+", so sometimes it wont correctly read that a user has signed in.
    location = Location.find(params["location_id"])
    new_review = Review.new(JSON.parse(request.body.read)["review"])
    new_review.user = current_user
    new_review.location = location
    new_review.save
    render json: new_review
  end

  private
  def review_params
    params.require(:review).permit(:rating, :body, :speed_data)
    # params.permit!
    # params.require(:review).permit!
  end
end
