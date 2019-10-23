class ReviewSerializer < ActiveModel::Serializer
  attributes :rating, :body, :speed_data, :id, :user_id, :created_at
end
