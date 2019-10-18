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
        price="$12"
        passwordProtected="yes"
      />
    )
  })

  it("renders a h2 tag with the location name", () => {
    expect(wrapper.find('h2#show-name').text()).toEqual("Name: Dunkin")
  })

  it("renders a h3 tag with the rating", () => {
    expect(wrapper.find('h3#show-rating').text()).toEqual("Rating: 5")
  })

  it("renders a p tag with the address", () => {
    expect(wrapper.find('p#show-address1').text()).toEqual("3 Third Street")
  })

  it("renders a p tag with the city, state, zip", () => {
    expect(wrapper.find('p#show-address2').text()).toEqual("Boston, MA 01234")
  })

  it("renders a p tag with the price", () => {
    expect(wrapper.find('p#show-price').text()).toEqual("Price: $12")
  })

  it("renders a p tag with the password protected status", () => {
    expect(wrapper.find('p#show-password-protect').text()).toEqual("Password Protected: yes")
  })
})
