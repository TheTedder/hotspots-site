class LocationShowSerializer < ActiveModel::Serializer
  attributes :name, :address, :address2, :price_show, :password_protected, :average_rating

  has_many :reviews, serializer: ReviewSerializer
end
