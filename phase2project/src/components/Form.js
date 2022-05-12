import React, {useState} from 'react';
import { useHistory, Redirect } from "react-router-dom";
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';
import Button from 'react-bootstrap/Button';


const Div = styled.div`
    border: 1px solid white;
    padding: 10px;
    border-radius: 5px;
    color: #060b26;
    background: beige;
    width: 600px;
    margin: auto;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
`

function Form({renderData, isLoggedIn, currentId, posts}) {
  const history = useHistory()
  const [form, setForm] = useState({ 
    img_url: "", 
    caption: "", 
    location: ""
  })

  if (!isLoggedIn) return <Redirect exact to="/" />;

  function handleChange(e) { 
    const {name, value} = e.target
    setForm((prevForm => ({...prevForm, [name]: value, id: uuidv4()})))
  }

  function handleSubmit (e) { 
    e.preventDefault()
    fetch (`http://localhost:3000/users/${currentId}`, { 
      method: "PATCH", 
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify({posts: [...posts, form]})
    })
    .then(response => response.json())
    .then(formData => renderData(formData))
      setForm({ 
        img_url: "", 
        caption: "", 
        location: "",
      })
      history.push('/posts')
    }

  return (
    <Div>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <h1 style={{color: '#060b26'}}>Submit a New Post</h1>
        <div>
        <label> Image: </label>
          <input
            type= "text"
            name= "img_url"
            placeholder= "Link to image"
            value= {form.img_url}
            onChange = {(e) => handleChange(e)}
          ></input>
        </div>
        <br></br>
        <div>
          <label>Caption: </label>
          <input
            type= "text"
            name= "caption"
            placeholder= "Caption"
            value= {form.caption}
            onChange = {(e) => handleChange(e)}
          ></input>
        </div>
        <br></br>
        <div>
          <label>Location: </label>
          <input
            type= "text"
            name= "location"
            placeholder= "Location"
            value={form.location}
            onChange = {(e) => handleChange(e)}
          ></input>
        </div>
        <div>
          <br></br>
          <Button type="submit" variant="outline-primary">Add new picture!</Button>
        </div>
      </form>
    </Div>
  )
}
export default Form;
  

  
  
  
  