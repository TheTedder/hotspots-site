class Location < ApplicationRecord
  belongs_to :user

  validates :name, presence: true
  validates :address, presence: true
  validates :city, presence: true
  validates :state, inclusion: { in: ISO3166::Country.new('US').states.keys }
  validates :price, numericality: { greater_than_or_equal_to: 0, only_integer: true }, allow_nil: true
  validates :password_protected, inclusion: { in: [true, false] }, allow_nil: true
  validates :zip, numericality: { only_integer: true }, presence: true

  has_many :reviews

  def average_rating
    if reviews.empty?
      return "No Reviews Yet!"
    else
      sum = reviews.sum { |review| review.rating }
      return sum.fdiv(reviews.length)
    end
  end

  def address2
    "#{city}, #{state} #{zip}"
  end

  def price_show
    if price.nil?
      return ""
    else
      return "Price: #{price == 0 ? "Free" : "$#{price.fdiv 100}"}"
    end
  end
end
