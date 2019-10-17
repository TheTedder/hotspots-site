require 'rails_helper'

RSpec.describe Api::V1::LocationsController, type: :controller do
  let!(:user1) {
    FactoryBot.create(:user)
  }
  let!(:location1) {
    Location.create(
      name: 'Nero',
      address: '20 Beach Street',
      city: 'Boston',
      state: 'MA',
      password_protected: false,
      zip: '02114',
      user: user1
    )
  }
  let!(:location2) {
    Location.create(
      name: 'Cafe',
      address: '20 Beach Street',
      city: 'Boston',
      state: 'MA',
      password_protected: true,
      price: 30,
      zip: '02114',
      user: user1
    )
  }

  describe 'GET#index' do
    it 'should return a list of all locations' do
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq(200)
      expect(response.content_type).to eq('application/json')

      expect(returned_json['locations'].length).to eq(2)
      expect(returned_json['locations'][0]['name']).to eq('Nero')
      expect(returned_json['locations'][1]['name']).to eq('Cafe')
      expect(returned_json['locations'][1]['password_protected']).to eq(true)
      expect(returned_json['locations']).to all(include('average_rating'))
    end
  end

  describe 'GET#show' do
    it 'should return all the information on one location' do
      get :show, params: {id: location1.id}
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq(200)
      expect(response.content_type).to eq('application/json')

      expect(returned_json['location']['name']).to eq('Nero')
      expect(returned_json['location']['address']).to eq('20 Beach Street')
      expect(returned_json['location']['average_rating']).to eq(nil)
      expect(returned_json['location']['price']).to eq(nil)
    end
  end
end
