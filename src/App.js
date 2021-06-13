import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from './components'
import {
  Product,
  Error,
} from './pages'
function App() {
  return (

    <Router>
      <Navbar />

      <Switch>
        <Route exact path='/'>
          <Product />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>

    </Router>

  )
}

export default App
