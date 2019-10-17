import React from 'react'
import { mount } from 'enzyme'

import LocationShowTile from './LocationShowTile'

describe('<LocationShowTile />', () => {
  it('should display all of the information for a single location', () => {

    let locationData = {
      name: 'Dunkin',
      address: '3 Third Street',
      address2: 'Boston, MA 01234',
      rating: 5,
      price: '$12',
      password_protected: 'yes'
    }
    const wrapper = mount(<LocationShowTile
      name="Dunkin"
      address="3 Third Street"
      address2="Boston, MA 01234"
      rating={5}
      price="$12"
      password_protected="yes"
    />)
    expect(wrapper.findWhere(node => node.text().includes('Dunkin')).exists()).toBe(true)
    expect(wrapper.findWhere(node => node.text().includes('3 Third Street')).exists()).toBe(true)
    expect(wrapper.findWhere(node => node.text().includes('Boston, MA 01234')).exists()).toBe(true)
    expect(wrapper.findWhere(node => node.text().includes('$12')).exists()).toBe(true)
    expect(wrapper.findWhere(node => node.text().includes('yes')).exists()).toBe(true)
  })
})
