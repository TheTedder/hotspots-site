require 'rails_helper'

RSpec.describe Api::V1::ReviewsController, type: :controller do
  describe 'POST#create' do
    context 'signed in user submits valid review' do
      let!(:user1) {
        FactoryBot.create(:user)
      }
      let!(:location) {
        FactoryBot.create(:location, user: user1)
      }

      it 'should persist to the database' do
        sign_in user1
        location = FactoryBot.create(:location, user: user1)
        test_review = {
          review: {
            rating: 5,
            body: "Hello this is a comment",
            speed_data: 10
          },
          location_id: location.id
        }

        current_count = Review.count
        post :create, params: test_review, format: :json
        expect(Review.count).to eq(current_count + 1)
      end

      it "should return the new review" do
        sign_in user1
        location = FactoryBot.create(:location, user: user1)
        test_review = {
          review: {
            rating: 5,
            body: "Hello this is a comment",
            speed_data: 10
          },
          location_id: location.id
        }

        post :create, params: test_review, format: :json

        response_body = JSON.parse(response.body)
        expect(response_body["review"]["body"]).to eq("Hello this is a comment")
        expect(response_body["review"]["rating"]).to eq(5)
        expect(response_body["review"]["speed_data"]).to eq(10)
        expect(response_body["review"]["user_id"]).to eq(user1.id)
      end
    end

    context "When an incorrect request is made" do
      let!(:user2) {
        FactoryBot.create(:user)
      }
      let!(:location2) {
        FactoryBot.create(:location, user: user2)
      }

      it "does not create a new review" do
        test_review = {
          review: {
            rating: 0,
            body: "I dont exist",
            speed_data: 10
          },
          location_id: location2.id
        }

        sign_in user2

        old_count = Review.count
        post :create, params: test_review, format: :json
        new_count = Review.count
        expect(new_count).to eq(old_count)
      end

      it "returns errors explaing whats wrong" do
        test_review = {
          review: {
            rating: 0,
            body: "I dont exist",
            speed_data: 10
          },
          location_id: location2.id
        }

        sign_in user2
        post :create, params: test_review, format: :json
        response_body = JSON.parse(response.body)
        expect(response_body["errors"][0]).to eq("Rating must be greater than or equal to 1")
      end
    end
  end
end
