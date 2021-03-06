class Location < ApplicationRecord
  belongs_to :user

  validates :name, presence: true
  validates :address, presence: true
  validates :city, presence: true
  validates :state, inclusion: { in: ISO3166::Country.new('US').states.keys }
  validates :price, numericality: { greater_than_or_equal_to: 0, only_integer: true }, allow_nil: true
  validates :password_protected, inclusion: { in: [true, false] }, allow_nil: true
  validates :zip, numericality: { only_integer: true }, presence: true
  validates :photo_ref, format: { with: /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/, multiline: true }, allow_nil: true

  has_many :reviews

  def average_rating
    if reviews.empty?
      return "No Reviews Yet!"
    else
      sum = reviews.sum { |review| review.rating }
      return (sum / reviews.length).to_f
    end
  end

  def address2
    "#{city}, #{state} #{zip}"
  end

  def price_show
    if price.nil?
      return ""
    else
      return "Price: #{price == 0 ? "Free" : "$%.2f" % price.fdiv(100)}"
    end
  end
end
