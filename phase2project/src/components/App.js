
import React from 'react'
import {Switch, Route} from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import Feed from './Feed'
import Explore from './Explore'
import Form from './Form'

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="posts/new">
          <Form/>
        </Route>
        <Route path="/explore">
          <Explore/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/posts">
          <Feed/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
