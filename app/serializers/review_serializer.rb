class ReviewSerializer < ActiveModel::Serializer
  attributes :rating, :body, :speed_data, :id, :user_id
end
