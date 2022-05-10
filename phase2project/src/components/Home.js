import React from 'react'

function Home() {
  return (
    <div className="home">
        <h1>Welcome to Finstagram</h1>
        <h3>Please Sign In</h3>
        <form>
            <div>
                <label for="username">Username: </label>
                <input type="text" id="username" name="username"/>
            </div>
            <br></br>
            <div>
                <label for="pass">Password: </label>
                <input type="password" id="pass" name="password"/>
            </div>
            <br></br>
            <input type="submit" value="Sign in"/>
        </form>
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