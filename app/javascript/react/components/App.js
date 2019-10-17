import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

import LocationShowPage from './LocationShowPage'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/locations/:id" component={LocationShowPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
