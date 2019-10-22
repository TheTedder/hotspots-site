require 'JSON'
class Api::V1::ReviewsController < ApiController

  def create
    # authenticity token creates spaces on "+", so sometimes it wont correctly read that a user has signed in.
    location = Location.find(params["location_id"])
    new_review = Review.new(JSON.parse(request.body.read)["review"].merge(user: current_user, location: location))
    new_review.save
    render json: new_review
  end

  private
  def review_params(review)

  end
end
