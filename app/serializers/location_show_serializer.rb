class LocationShowSerializer < ActiveModel::Serializer
  attributes :name, :address, :address2, :price, :password_protected, :average_rating

  has_many :reviews, serializer: ReviewSerializer
end
