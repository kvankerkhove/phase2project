import React, {useState} from 'react';
import { useHistory } from "react-router-dom";

function Form({renderData}) {
  const history = useHistory()
  const [form, setForm] = useState({ 
    img_url: "", 
    caption: "", 
    location: "",
  })

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
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div>
        <label>Upload image</label>
          <input 
            type= "text"
            name= "img_url"
            placeholder= "Link to image"
            value= {form.img_url}
            onChange = {(e) => handleChange(e)}
          ></input>
        </div>
        <div>
          <label>Write a caption!</label>
          <input 
            type= "text"
            name= "caption"
            placeholder= "Caption"
            value= {form.caption}
            onChange = {(e) => handleChange(e)}
          ></input>
        </div>
        <div>
          <label>Location</label>
          <input 
            type= "text"
            name= "location"
            placeholder= "Location"
            value={form.location}
            onChange = {(e) => handleChange(e)}
          ></input>
        </div>
        <div>
          <button>Add new picture!</button>
        </div>
      </form>
  )
}

export default Form;