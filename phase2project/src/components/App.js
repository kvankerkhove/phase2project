
import React, { useState } from 'react'
import {Switch, Route, useHistory} from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home'
import Feed from './Feed'
import Explore from './Explore'
import Form from './Form'

function App() {
  const [ username, setUsername] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const history = useHistory()

  console.log(history)

  const handleLogin = (loginInfo) => {
    setUsername(loginInfo.username)
    setIsLoggedIn(true)
    history.push("/posts")
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/posts/new">
          <Form/>
        </Route>
        <Route path="/explore">
          <Explore/>
        </Route>
        <Route exact path="/">
          <Home handleLogin={handleLogin} username={username} isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
        </Route>
        <Route exact path="/posts">
          <Feed/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
