import React from 'react'

function Photo({post}) {
    const {id, img_url, caption, location} = post
  return (
    <>
        <p>{location}</p>
        <img src={img_url} alt="There should be a photo here" height="400px"/>
        <p>{caption}</p>
    </>
  )
}

export default Photo