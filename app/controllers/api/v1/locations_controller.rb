class Api::V1::LocationsController < ApiController
  def index
    render json: Location.all
  end

  def show
    location = Location.find(params[:id])
    render json: location, serializer: LocationShowSerializer
  end

  def create
    new_location = Location.new(location_params)
    begin
      if params["location"].include?("price")
        new_location.price = (Float(params["location"]["price"]) * 100).to_i
      end
    rescue ArgumentError
    end
    new_location.user = current_user
    if new_location.save
      render json: new_location
    else
      render json: {'errors': new_location.errors.full_messages}
    end
  end

  private
  def location_params
    params.require(:location).permit(:name, :address, :city, :state, :zip, :password_protected)
  end
end
