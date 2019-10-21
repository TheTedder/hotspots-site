import React from "react"
import Enzyme, { mount } from "enzyme"

import ReviewTile from './ReviewTile'

describe("ReviewTile", () => {
  let wrapper
  let wrapper2

  beforeEach(() => {
    wrapper = mount(
      <ReviewTile
        id="3"
        userId="3"
        rating="5"
        body="Great Wifi"
        speedData=""
      />
    )
    wrapper2 = mount(
      <ReviewTile
        id="4"
        userId="3"
        rating="3"
        body=""
        speedData="3000.9"
      />
    )
  })

  it("renders a card", () => {
    expect(wrapper.find('div.card').exists()).toEqual(true)
  })

  it("renders a gold star for each rating point", () => {
    expect(wrapper.find('i.fa.fa-star.gold-star').length).toEqual(5)
    expect(wrapper.find('i.fa.fa-star.grey-star').exists()).toEqual(false)
  })

  it("renders a body if given", () => {
    expect(wrapper.find('div.review-body').text()).toEqual('Great Wifi')
  })

  it("renders a speed rating if given", () => {
    expect(wrapper2.find('p.speed-data-result').text()).toEqual('Speed: 3000.9 kb/s')
    expect(wrapper.find('p.speed-data-result').text()).not.toContain('kb/s')
  })

})
