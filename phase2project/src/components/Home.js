import React, { useState, useEffect } from 'react'
import Login from "./Login"
import Logout from "./Logout"

function Home({handleLogin, currentUsername, isLoggedIn, handleLogout, users, updatedUsers, updateUsers}) {

  return (
    <div className="home">
        {isLoggedIn ? <Logout currentUsername={currentUsername} handleLogout={handleLogout}/> : <Login users={users} handleLogin={handleLogin} updatedUsers={updatedUsers} updateUsers={updateUsers}/>}
    </div>
  )
}
export default Home;