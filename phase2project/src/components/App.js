import React, {useState, useEffect} from 'react';
import {Switch, Route, useHistory} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Feed from './Feed';
import ExplorePage from './ExplorePage';
import Form from './Form';

function App() {
  const [currentUsername, setCurrentUsername] = useState("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [updatedUsers, setUpdatedUsers] = useState(users)
  const [currentId, setCurrentId] = useState("")
  const [pageNumber, setPageNumber] = useState(1)

  const history = useHistory()

  const handleDelete = (deletedPost) => {
    const filteredPosts = posts.filter(post => post.id !== deletedPost.id)
    
    fetch(`http://localhost:3000/users/${currentId}`, {
      method: "PATCH",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({posts: filteredPosts})
    })
    .then(res => res.json())
    .then((filteredData) => { 
      setPosts(filteredData.posts)
    })
  }

  useEffect(() => {
    if(currentUsername !== ""){
      const currentUser = updatedUsers.find(user => { 
        return user.username === currentUsername
      })
  
      setCurrentId(currentUser.id)
    }
  }, [currentUsername])

  //Grabs users
    useEffect(() => {
        fetch("http://localhost:3000/users")
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    //Grabs posts
    useEffect(() => {
      fetch(`http://localhost:3000/users/${currentId}`)
      .then(res => res.json())
      .then(data => setPosts(data.posts))
    }, [currentId])

  //Sets updated users
  useEffect(() => {
    setUpdatedUsers(users)
  }, [users])

  function renderData(formData) { 
    setPosts(formData.posts)
  }

  const handleLogin = (loginInfo) => {
    setCurrentUsername(loginInfo.username)
    setIsLoggedIn(true)
    history.push("/")
  }
  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  const updateUsers = (newUser) => { 
    setUpdatedUsers([...users, newUser])
  }

  const handleExploreRefresh = () => {
    setPageNumber((pageNumber) => pageNumber + 1)
  }

  return (
    <div>
      <NavBar handleExploreRefresh={handleExploreRefresh}/>
      <Switch>
        <Route path="/posts">
          <Feed posts={posts} isLoggedIn={isLoggedIn} currentUsername={currentUsername} handleDelete={handleDelete}/>
        </Route>
        <Route path="/new">
          <Form posts={posts} renderData={renderData} isLoggedIn={isLoggedIn} currentId={currentId}/>
        </Route>
        <Route path="/explore">
          <ExplorePage isLoggedIn={isLoggedIn} pageNumber={pageNumber}/>
        </Route>
        <Route exact path="/">
          <Home handleLogin={handleLogin} currentUsername={currentUsername} isLoggedIn={isLoggedIn} handleLogout={handleLogout} users={users} updatedUsers={updatedUsers} updateUsers={updateUsers}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
