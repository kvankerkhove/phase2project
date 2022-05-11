import React from 'react'; 

function Logout({currentUsername, handleLogout}) {
  return (
      <div>
          <h1>Welcome, {currentUsername}</h1>
          <button onClick={handleLogout}>Logout</button>
      </div>
  )
}
export default Logout