import React from 'react'
import styled from 'styled-components'
import { MdLocationOn } from 'react-icons/md'
import CloseButton  from 'react-bootstrap/CloseButton'

function Photo({post, currentUsername, handleDelete}) {
    const {id, img_url, caption, location} = post

  return (
    <div className="myphoto">
        <medium className="location"><MdLocationOn style={{fontSize: "25px"}} />{location}</medium>
        <img className='image' src={img_url} alt="There should be a photo here" height="500px" width="500px"/>
        <medium><b>{currentUsername} </b>{caption}</medium>
        <CloseButton aria-label='Hide' onClick={() => handleDelete(post)} className='deletebutton'/>
    </div>
  )
}
export default Photo









