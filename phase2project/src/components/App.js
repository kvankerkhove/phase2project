import React, {useState, useEffect} from 'react';
import {Switch, Route, useHistory} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Feed from './Feed';
import ExplorePage from './ExplorePage';
import Form from './Form';

function App() {
  const [username, setUsername] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [posts, setPosts] = useState([])

  const history = useHistory()

  useEffect(() => {
    fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

  function renderData(formData) { 
    setPosts([...posts, formData])
  }

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
        <Route path="/posts">
          <Feed posts={posts}/>
        </Route>
        <Route path="/new">
          <Form renderData={renderData}/>
        </Route>
        <Route path="/explore">
          <ExplorePage/>
        </Route>
        <Route exact path="/">
          <Home handleLogin={handleLogin} username={username} isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
