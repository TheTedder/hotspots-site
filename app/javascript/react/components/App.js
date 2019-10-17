import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/locations/:id" component={LocationShowPage}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
