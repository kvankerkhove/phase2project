import React from 'react'
import styled from 'styled-components'
import { MdLocationOn } from 'react-icons/md'

// const Div = styled.div`
//     width: 240px;
//     height: 240px;
//     padding: 10px;
//     background-color: white;
//     box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 0.1);
//     margin: 10px;
// `
// const Img = styled.img`
//     padding: 5px;
// `
function Photo({post, currentUsername, handleDelete}) {
    const {id, img_url, caption, location} = post

    // const handleDelete = () => {
    //   console.log(post)
    //   fetch(`http://localhost:3000/users/${currentId}`, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type" : "application/json"
    //     },
    //     body: JSON.stringify(post)
    //   })
    //   .then(res => res.json())
    //   .then(() => {})
    // }
  return (
    <div className="myphoto">
        <medium><MdLocationOn />{location}</medium>
        <img className='image' src={img_url} alt="There should be a photo here" height="500px" width="500px"/>
        <large className="likebutton">♡ </large>
        <medium><b>{currentUsername} </b>{caption}</medium>
        <button onClick={() => handleDelete(post)} className='deletebutton'>x</button>
    </div>
  )
}
export default Photo









