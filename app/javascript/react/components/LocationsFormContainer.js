import React, { useState } from 'react';

const LocationsFormContainer = props => {
  const [newLocation, setNewLocation] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    passwordProtected: ""
  })

  const handleChange = (event) => {
    setNewLocation({
      ...newLocation,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  return(
    <div id="newForm">
      <h1>Add a new Hotspot!</h1>
        <form className="callout">
          <label htmlFor="name">
            Location Name:
          <input type="text" id="name" />
          </label>
          <label htmlFor="address">
            Address:
            <input type="text" id="address" />
          </label>
          <label htmlFor="city">
            City:
            <input type="text" id="city" />
          </label>
          <label htmlFor="state">
            State:
            <input type="text" id="state" />
          </label>
          <label htmlFor="zip">
            Zip Code:
            <input type="text" id="zip" />
          </label>
          <label htmlFor="password_protected">
            Password Protected?
          <select id="passwordProtected">
            <option selected value=""></option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default LocationsFormContainer
