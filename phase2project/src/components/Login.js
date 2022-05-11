import React, { useState} from 'react'
import Signup from './Signup'
import styled from 'styled-components'

const Div = styled.div`
    border: 1px solid white;
    padding: 10px;
    box-shadow: 5px 5px 1px pink;
    margin-top: 50px;
    color: black;
    background: white;
    width: 500px;
    margin-left: 30%;
    margin-right: 30%;
`
function Login({handleLogin, users, updatedUsers, updateUsers}) {
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

    const onSignUpClick = (newUser) => {
        setSignUp(false)
        updateUsers(newUser)
        setFormData(newUser)
    }

  return (
    <Div>
        <h1>Welcome to Gallery</h1>
        <form onSubmit={handleSubmit}>
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
            <input type="submit" value="Log in"/>
        </form>
        {signUp
        ? <Signup onSignUpClick={onSignUpClick} />
        : (
            <>
                <small>New to Gallery? </small>
                <button onClick={handleSignUp} id="signup-btn">Sign Up</button>
            </>
        )}
    </Div>
  )
}
export default Login