class Location < ApplicationRecord
  belongs_to :user

  validates :name, presence: true
  validates :address, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :price, numericality: { greater_than_or_equal_to: 0, only_integer: true }, allow_nil: true
  validates :password_protected, inclusion: { in: [true, false] }, allow_nil: true
  validates :zip, numericality: { only_integer: true }, presence: true

  has_many :reviews
end
