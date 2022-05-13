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
    background: #ffe7c2;
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
`
const H1 = styled.h1`
  font-family: 'Poppins', sans-serif;
  color: #ffe7c2;
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
    <div className="form-container">
      <H1 className="form-header">Submit a New Post</H1>
      <Div>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
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
            <Button type="submit" variant="outline-primary">Add to Gallery</Button>
          </div>
        </form>
      </Div>
    </div>
  )
}
export default Form;
  

  
  
  
  