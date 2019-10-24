require 'rails_helper'

RSpec.describe Api::V1::LocationsController, type: :controller do
  let!(:user1) {
    FactoryBot.create(:user)
  }
  let!(:location1) {
    FactoryBot.create(:location, user: user1)
  }
  let!(:location2) {
    FactoryBot.create(:location, user: user1)
  }

  describe 'GET#index' do
    it 'should return a list of all locations' do
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq(200)
      expect(response.content_type).to eq('application/json')

      expect(returned_json['locations'].length).to eq(2)
      expect(returned_json['locations'][0]['name']).to eq(location1.name)
      expect(returned_json['locations'][1]['name']).to eq(location2.name)
      expect(returned_json['locations'][1]['password_protected']).to eq(location2.password_protected)
      expect(returned_json['locations']).to all(include('average_rating'))
    end
  end

  describe 'GET#show' do
    it 'should return all the information on one location' do
      get :show, params: {id: location1.id}
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq(200)
      expect(response.content_type).to eq('application/json')

      expect(returned_json['location']['name']).to eq(location1.name)
      expect(returned_json['location']['address']).to eq(location1.address)
      expect(returned_json['location']['average_rating']).to eq(location1.average_rating)
      expect(returned_json['location']['price']).to eq(location1.price)
    end
  end

  describe 'POST#create' do
    context "signed in user submits a valid location" do
      it "should persist to the database" do
        sign_in user1
        test_location = {
          location: {
            name: "gourmet dumpling",
            address: "22 beach st",
            city: "Boston",
            state: "MA",
            zip: "02113",
            user: user1
          }
        }

        old_count = Location.count
        post :create, params: test_location, format: :json
        expect(Location.count).to eq(old_count + 1)
      end

      it "should return the new location" do
        sign_in user1
        test_location = {
          location: {
            name: "gourmet dumpling",
            address: "22 beach st",
            city: "Boston",
            state: "MA",
            zip: "02113",
            user: user1
          }
        }

        post :create, params: test_location, format: :json

        response_body = JSON.parse(response.body)
        expect(response.status).to eq 200
        expect(response.content_type).to eq("application/json")
        expect(response_body["location"]["name"]).to eq("gourmet dumpling")
        expect(response_body["location"]["city"]).to eq("Boston")
        expect(response_body["location"]["state"]).to eq("MA")
        expect(response_body["location"]["zip"]).to eq(nil)
        expect(response_body["location"]["password_protected"]).to eq(nil)
      end
    end

    context "user submits an invalid location" do
      it "does not persist to the database" do
        sign_in user1
        test_location = {
          location: {
            address: "22 beach st",
            city: "Boston",
            state: "MA",
            zip: "02113",
            user: user1
          }
        }

        old_count = Location.count
        post :create, params: test_location, format: :json
        expect(Location.count).to eq(old_count)
      end

      it "returns an error" do
        sign_in user1
        test_location = {
          location: {
            address: "22 beach st",
            city: "Boston",
            state: "MA",
            zip: "02113",
            user: user1
          }
        }

        post :create, params: test_location, format: :json

        response_body = JSON.parse(response.body)
        expect(response_body["errors"][0]).to eq("Name can't be blank")
      end
    end
  end
end
