import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import CloseButton  from 'react-bootstrap/CloseButton';


function Photo({post, currentUsername, handleDelete}) {
    const { img_url, caption, location, liked} = post

  return (
    <div className="myphoto">
        <medium className="location"><MdLocationOn style={{fontSize: "25px"}} />{location}</medium>
        <div className='image-container'>
          <img className='image' src={img_url} alt="There should be a photo here"/>
        </div>
        <medium className='caption'><b>{currentUsername} </b>{caption}</medium>
        <CloseButton aria-label='Hide' onClick={() => handleDelete(post)} className='deletebutton'/>
    </div>
  )
}
export default Photo









