import React from 'react'
import Photo from './Photo'

function PhotosList({posts, currentUsername, handleDelete}) {
    const renderPosts = posts.map(post => {
        return <Photo key={post.id} post={post} currentUsername={currentUsername} handleDelete={handleDelete} />
    })
    
  return (
    <div className="myphotolist">
        {renderPosts}
    </div>
  )
}

export default PhotosList