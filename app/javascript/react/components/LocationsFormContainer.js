import React, { useState } from 'react';

const LocationsFormContainer = props => {
  const [newLocation, setNewLocation] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    password_protected: ""
  })

  const handleChange = (event) => {
    setNewLocation({
      ...newLocation,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  return(
    <div id="new-form">
      <h1>Add a new Hotspot!</h1>
        <form className="callout">
          <label htmlFor="name">
            Location Name:
          <input type="text" id="name" name="name" value="name" onChange={handleChange}/>
          </label>
          <label htmlFor="address">
            Address:
            <input type="text" id="address" name="address" value="address" onChange={handleChange}/>
          </label>
          <label htmlFor="city">
            City:
            <input type="text" id="city" name="city" value="city" onChange={handleChange}/>
          </label>
          <label htmlFor="state">
            State:
            <input type="text" id="state" name="state" value="state" onChange={handleChange}/>
          </label>
          <label htmlFor="zip">
            Zip Code:
            <input type="text" id="zip" name="zip" value="zip" onChange={handleChange}/>
          </label>
          <label htmlFor="password-protected">
            Password Protected?
          <select id="password-protected" name="password-protected" value="password_protected" onChange={handleChange}>
            <option defaultValue=""></option>
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
