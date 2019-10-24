import React from 'react'
import { mount } from 'enzyme'

import LocationShowTile from './LocationShowTile'

describe('<LocationShowTile />', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <LocationShowTile
        name="Dunkin"
        address="3 Third Street"
        address2="Boston, MA 01234"
        rating={5}
        price="Price: $12"
        passwordProtected="yes"
      />
    )
  })

  it("renders a h2 tag with the location name", () => {
    expect(wrapper.find('.location-show-header').text()).toEqual("Dunkin")
  })

  it("renders a h3 tag with the rating", () => {
    expect(wrapper.find('.location-show-rating').text()).toContain("Overall Rating: 5")
  })

  it("renders a p tag with the address", () => {
    let address = wrapper.find('.location-show-address').text()
    expect(address).toContain("3 Third Street")
    expect(address).toContain("Boston, MA 01234")
  })

  it("renders the price in dollars", () => {
    expect(wrapper.find('.location-show-price').text()).toEqual("Price: $12")
  })

  it("renders a badge with the text 'password required'", () => {
    expect(wrapper.find('.location-show-password-protected').text()).toEqual("Password Required")
  })
})
