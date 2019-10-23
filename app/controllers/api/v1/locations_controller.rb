class Api::V1::LocationsController < ApplicationController
  def index
    render json: Location.all
  end

  def show
    location = Location.find(params[:id])
    binding.pry
    render json: location, serializer: LocationShowSerializer
  end
end
