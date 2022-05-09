
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import Feed from './Feed'
import Explore from './Explore'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/feed">
          <Feed/>
        </Route>
        <Route path="/explore">
          <Explore/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
