class ReviewSerializer < ActiveModel::Serializer
  attributes :rating, :body, :speed_data, :id, :user_id, :created_at, :error_messages

  def error_messages
    object.errors.full_messages
  end
end
