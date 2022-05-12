import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function Signup({onSignUpClick}) {
    const [signUpData, setSignUpData] = useState({
        username: "",
        password: ""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signUpData)
        })
        .then(res => res.json())
        .then(data => onSignUpClick(data))
    }
    const handleOnChange = (e) => {
        const {name, value} = e.target
        setSignUpData({...signUpData, [name]:value})
    }
  return (
    <div>
        <h1>Sign Up!</h1>
        <p>Enter a username and password below</p>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" value={signUpData.username} onChange={handleOnChange}/>
            </div>
            <br></br>
            <div>
                <label htmlFor="pass">Password: </label>
                <input type="password" id="pass" name="password" value={signUpData.password} onChange={handleOnChange}/>
            </div>
            <br></br>
            <Button type="submit" variant="outline-primary">Sign Up</Button>{' '}
        </form>
    </div>
  )
}
export default Signup