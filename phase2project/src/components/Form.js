import React, {useState} from 'react';
import { useHistory, Redirect } from "react-router-dom";
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

function Form({renderData, isLoggedIn}) {
  const history = useHistory()
  const [form, setForm] = useState({ 
    img_url: "", 
    caption: "", 
    location: "",
  })

  if (!isLoggedIn) return <Redirect exact to="/" />;

  function handleChange(e) { 
    const {name, value} = e.target
    setForm((prevForm => ({...prevForm, [name]: value})))
  }

  function handleSubmit (e) { 
    e.preventDefault()
    fetch ("http://localhost:3000/posts", { 
      method: "POST", 
      headers: { 
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form)
    })
    .then(response => response.json())
    .then(formData => {renderData(formData)})
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
      <h1>Submit a New Post</h1>
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
          <button>Add new picture!</button>
        </div>
      </form>
    </Div>
  )
}
export default Form;
  

  
  
  
  