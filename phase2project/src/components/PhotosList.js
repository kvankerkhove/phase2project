import React from 'react'
import Photo from './Photo'

function PhotosList({posts}) {
    const renderPosts = posts.map(post => {
        return <Photo key={post.id} post={post} />
    })
  return (
    <div>
        {renderPosts}
    </div>
  )
}

export default PhotosList