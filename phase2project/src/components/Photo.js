import React from 'react'
import styled from 'styled-components'
import { MdLocationOn } from 'react-icons/md'

function Photo({post, currentUsername, handleDelete}) {
    const {id, img_url, caption, location} = post

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









