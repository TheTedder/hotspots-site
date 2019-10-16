import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import LocationsIndexContainer from "./LocationsIndexContainer"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LocationsIndexContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
