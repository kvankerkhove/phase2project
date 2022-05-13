import React, { useState} from 'react';
import Signup from './Signup';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

const Div = styled.div`
    border: 1px solid white;
    padding: 10px;
    border-radius: 5px;
    color: #060b26;
    background: #ffe7c2;
    width: 500px;
    margin: auto;
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
`

function Login({handleLogin, updatedUsers, updateUsers}) {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const [signUp, setSignUp] = useState(false)
    const [loginIsCorrect, setLoginIsCorrect] = useState(true)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const foundUser = updatedUsers.find(user => {
           return ((user.username === formData.username) && (user.password === formData.password))
        })
        if(foundUser) {
            handleLogin(formData)
        } else {
            setLoginIsCorrect(false)
        }
    }

    const handleSignUp = (e) => {
        setSignUp(true)
    }

    //for Sign up button
    const onSignUpClick = (newUser) => {
        setSignUp(false)
        updateUsers(newUser)
        setFormData(newUser)
    }

  return (
    <Div >
        <h2>Welcome to Gallery</h2>
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlFor="username">Username: </label>
                <input type="text" id="username" name="username" value={formData.username} onChange={handleChange}/>
            </div>
            <br></br>
            <div>
                <label htmlFor="pass">Password: </label>
                <input type="password" id="pass" name="password" value={formData.password} onChange={handleChange}/>
            </div>
            {loginIsCorrect ? null : <small style={{color: "red"}}>username or password is incorrect</small>}
            <br></br>
            <Button type="submit" variant="outline-primary">Login</Button>{' '}
        </form>
        <br></br>
        {signUp
        ? <Signup onSignUpClick={onSignUpClick} setSignUp={setSignUp}/>
        : (
            <>
                <small>New to Gallery? <Button variant="outline-primary" onClick={handleSignUp} id="signup-btn" style={{fontSize: '10px'}}>Sign Up</Button>{' '} </small>
            </>
        )}
    </Div>
  )
}
export default Login; 