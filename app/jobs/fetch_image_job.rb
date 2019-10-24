require 'net/http'
require 'JSON'

class FetchImageJob < ApplicationJob
  PLACES_FIND_URL = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json'
  PLACES_PHOTO_URL = 'https://maps.googleapis.com/maps/api/place/photo'
  queue_as :default

  def perform(*location_ids)
    location_ids.each do |location_id|
      location = Location.find(location_id)
      next if location.nil?

      uri = URI(PLACES_FIND_URL)
      params = {
        key: ENV['PLACES_KEY'],
        input: [location.name, location.address, location.address2].join(" "),
        inputtype: 'textquery',
        fields: 'photos'
      }
      uri.query = URI.encode_www_form(params)
      response = Net::HTTP.get_response(uri)
      next unless Net::HTTPSuccess === response
      place = JSON.parse(response.body)
      next if place['status'] == 'ZERO_RESULTS'
      photoref = place['candidates'].first['photos'].first['photo_reference']
      next if photoref.nil?

      uri = URI(PLACES_PHOTO_URL)
      params = {
        key: ENV['PLACES_KEY'],
        photo_reference: photoref,
        maxheight: 800
      }
      uri.query = URI.encode_www_form(params)
      response = Net::HTTP.get_response(uri)
      content_type = response.content_type
      case response
      when Net::HTTPRedirection then
        location.update(photo_ref: response['location'])
      end
    end
  end
end
