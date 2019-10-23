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
      it 'should persist to the database' do
        sign_in user1
        location = FactoryBot.create(:location, user: user1)
        test_review = {
          review: {
            rating: 5,
            body: "Hello this is a comment",
            speed_data: 10
          },
          location_id: location.id,
        }

        current_count = Review.count
        post :create, params: test_review, format: :json
        expect(Review.count).to eq(current_count + 1)
      end
    end
  end
end
