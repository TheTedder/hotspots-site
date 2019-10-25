import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { UsaStates } from 'usa-states'

const LocationsFormContainer = props => {
  const [errorList, setErrorList] = useState([])
  const [redirect, setRedirect] = useState(null)
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

  const states = (new UsaStates()).states.map( (state, index) => {
    return (
      <option key={index} value={state.abbreviation}>
        {state.abbreviation}
      </option>
    )
  })

  const onLocationSubmitted = (location) => {
    fetch(`/api/v1/locations`, {
      method: 'POST',
      credentials: "same-origin",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(location)
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
         error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(locationBody => {
      if (locationBody.location){
        setErrorList([])
        setRedirect(locationBody.location.id)
      } else {
        setErrorList(locationBody.errors)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
    }

  if (redirect !== null) {
    return <Redirect to={`/locations/${redirect}`} />
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    onLocationSubmitted(newLocation)
  }

  return(
    <div id="new-form">
      <h1>Add a new Hotspot!</h1>
      {errorList.join(" and ")}
      <form className="callout" onSubmit={onSubmitHandler}>

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
          <select id="state" name="state" value={newLocation.state} onChange={handleChange}>
            <option value=""></option>
            {states}
          </select>
        </label>

        <label htmlFor="zip">
          Zip Code:
          <input type="text" id="zip" name="zip" value={newLocation.zip} onChange={handleChange}/>
        </label>

        <label htmlFor="password-protected">
          Password Protected?
          <select id="password-protected" name="password_protected" value={newLocation.password_protected} onChange={handleChange}>
            <option value=""></option>
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
