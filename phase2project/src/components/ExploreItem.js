import React from 'react'

function ExploreItem({url}) {
  return (
    <span>
        <img src={url} 
        alt="Whoops!" className="gallery-item"
        ></img>
    </span>
  )
}

export default ExploreItem