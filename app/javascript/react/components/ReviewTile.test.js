import React from "react"
import Enzyme, { mount } from "enzyme"

import ReviewTile from './ReviewTile'

describe("ReviewTile", () => {
  describe("Review With Body", () => {
    let wrapper

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
    })

    it("renders a card", () => {
      expect(wrapper.find('div.card').exists()).toEqual(true)
    })

    it("renders a body if given", () => {
      expect(wrapper.find('div.review-body').text()).toEqual('Great Wifi')
    })

    it("renders a gold star for each rating point", () => {
      expect(wrapper.find('i.fa.fa-star.gold-star').length).toEqual(5)
      expect(wrapper.find('i.fa.fa-star.grey-star').exists()).toEqual(false)
    })

    it("does not render a speed rating when one is not provided", () => {
      expect(wrapper.find('p.speed-data-result').text()).not.toContain('kb/s')
    })
  })

  describe("Review with speed data", () => {
    let wrapper2

    beforeEach(() => {
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

    it("renders speed when given one", () => {
      expect(wrapper2.find('p.speed-data-result').text()).toEqual('Speed: 3000.9 kb/s')
    })

    it("renders a gold star for each rating point", () => {
      expect(wrapper2.find('i.fa.fa-star.gold-star').length).toEqual(3)
    })

    it("pads the gold stars with grey stars up to 5", () => {
      expect(wrapper2.find('i.fa.fa-star.grey-star').length).toEqual(2)
    })
  })
})
