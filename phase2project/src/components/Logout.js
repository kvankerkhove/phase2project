import React from 'react'; 
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

function Logout({currentUsername, handleLogout}) {

  const H1 = styled.h1`
    color: white;
    font-family: 'Poppins', sans-serif;
`
  return (
      <div className="welcome">
          <H1 className="welcome-message">Welcome, {currentUsername}!</H1>
          <Button onClick={handleLogout} className="logout-button" >Logout</Button>
      </div>
  )
}
export default Logout