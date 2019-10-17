class LocationSerializer < ActiveModel::Serializer
  attributes :id, :name, :city, :state, :price, :password_protected, :average_rating
end
