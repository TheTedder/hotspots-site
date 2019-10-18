import React, { useState } from 'react'

const LocationsFormContainer = props => {
  const [newLocation, setNewLocation] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    password_protected: "",
    price: ""
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
        <input type="text" id="name" name="name" value={newLocation.name} onChange={handleChange}/>
        </label>

        <label htmlFor="address">
          Address:
          <input type="text" id="address" name="address" value={newLocation.address} onChange={handleChange}/>
        </label>

        <label htmlFor="city">
          City:
          <input type="text" id="city" name="city" value={newLocation.city} onChange={handleChange}/>
        </label>

        <label htmlFor="state">
          State:
          <input type="text" id="state" name="state" value={newLocation.state} onChange={handleChange}/>
        </label>

        <label htmlFor="zip">
          Zip Code:
          <input type="text" id="zip" name="zip" value={newLocation.zip} onChange={handleChange}/>
        </label>

        <label htmlFor="password-protected">
          Password Protected?
          <select id="password-protected" name="password-protected" value={newLocation.password_protected} onChange={handleChange}>
            <option defaultValue=""></option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>

        <label htmlFor="price">
          Price:
          <input type="text" id="price" name="price" value={newLocation.price} onChange={handleChange}/>
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default LocationsFormContainer
