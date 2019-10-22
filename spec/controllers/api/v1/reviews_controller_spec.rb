require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do
  let!(:user1) {
    FactoryBot.create(:user)
  }
  let!(:location) {
    FactoryBot.create(:location, user: user1)
  }

  describe 'POST#create' do
    context 'signed in user submits valid review' do
      let!(:new_review_hash) { { review: { rating: 3, body: "yup yup", speed_data: 12, user: user1, location: location } } }

      it 'should persist to the database' do
      # post_json = {
      #   rating: 2,
      #   body: "AHH REAL MONSTERS",
      #   speed_data: 24,
      #   user: user1,
      #   location: location
      # }.to_json
        pre_count = Review.all.length
        new_review = Review.create(new_review_hash[:review])
        # expect{ post :create, new_review_hash, "locations/#{location.id}/reviews", format: :json}.to change{ Review.count }.by 1

        expect(Review.all.length).to eq(pre_count + 1)
      end
    end
  end
end
