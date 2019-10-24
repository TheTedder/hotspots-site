class Api::V1::LocationsController < ApiController
  def index
    render json: Location.all
  end

  def show
    render json: Location.find(params[:id]), serializer: LocationShowSerializer
  end
end
