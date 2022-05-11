import React from 'react'; 

function Logout({username, handleLogout}) {
  return (
      <div>
          <h1>Welcome, {username}</h1>
          <button onClick={handleLogout}>Logout</button>
      </div>
  )
}
export default Logout