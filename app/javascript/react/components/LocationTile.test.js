import React from "react"
import Enzyme, { mount } from "enzyme"
import { BrowserRouter } from 'react-router-dom'

import LocationTile from "./LocationTile"

describe("LocationTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <LocationTile
          key="3"
          id="3"
          name="Unos"
          city="Boston"
          state="MA"
          passwordProtected={true}
        />
      </BrowserRouter>
    )
  })

  it("renders a h3 tag with the location name", () => {
    expect(wrapper.find('h3').text()).toEqual("Unos")
  })

  it("renders the location city, state", () => {
    expect(wrapper.find('.location-index-citystate').text()).toEqual("Boston, MA")
  })

  it("renders a list tag with the location passwordProtected status", () => {
    expect(wrapper.find('i.fa-lock').exists()).toEqual(true)
  })

})
