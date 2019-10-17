class Review < ApplicationRecord
  belongs_to :user
  belongs_to :location

  validates :rating, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
  validates :speed_data, numericality: { greater_than: 0 }
  validates :user_id, presence: true
  validates :location_id, presence: true
end
