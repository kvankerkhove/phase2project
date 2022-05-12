import React from 'react'; 
import styled from 'styled-components';

function Logout({currentUsername, handleLogout}) {

  const H1 = styled.h1`
    color: white;
    font-family: 'Poppins', sans-serif;
`
  return (
      <div className="welcome">
          <H1 className="welcome-message">Welcome, {currentUsername}!</H1>
          <button onClick={handleLogout}>Logout</button>
      </div>
  )
}
export default Logout