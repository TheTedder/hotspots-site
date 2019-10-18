import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import LocationsIndexContainer from "./LocationsIndexContainer"
import LocationsFormContainer from "./LocationsFormContainer"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LocationsIndexContainer}/>
        <Route exact path="/locations" component={LocationsIndexContainer}/>
        <Route exact path="/locations/new" component={LocationsFormContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
