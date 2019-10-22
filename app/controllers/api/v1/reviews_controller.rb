require 'JSON'
class Api::V1::ReviewsController < ApiController
  protect_from_forgery unless: -> { request.format.json? }
  # skip_before_action :verify_authenticity_token
  #protect_from_forgery with: :null_session



  def create
    binding.pry
    location = Location.find(params["location_id"])
    newRev = Review.new(JSON.parse(request.body.read)["review"])
    render json: {message: "foobar"}
  end

  private
  def review_params
    params.require(:review).permit(:rating, :body, :speed_data)
  end
end
