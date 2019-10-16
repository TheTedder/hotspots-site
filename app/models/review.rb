class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :rating, presence: true, numericality: { only_integer: true }, :inclusion => { :in => 1..5 }

  belongs_to :user
  belongs_to :location
end
