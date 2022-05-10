import React, { useState, useEffect } from 'react'
import Login from "./Login"
import Logout from "./Logout"

function Home({handleLogin, username, isLoggedIn, handleLogout}) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

  return (
    <div className="home">
        {isLoggedIn ? <Logout username={username} handleLogout={handleLogout}/> : <Login users={users} handleLogin={handleLogin}/>}
    </div>
  )
}

export default Home



{/* <input type="text" name="username" placeholder='Enter Username'/>
<input type="password" name="password" placeholder='Enter Password'/>
<input type="submit"/> */}

{/* <div>
    <label for="pass">Password (8 characters minimum):</label>
    <input type="password" id="pass" name="password"
        minlength="8" required/>
</div> */}