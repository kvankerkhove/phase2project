import React from 'react'
import Photo from './Photo'
import styled from 'styled-components'

const H1 = styled.h1`
  font-family: 'Poppins', sans-serif;
  color: #ffe7c2;
`

function PhotosList({posts, currentUsername, handleDelete}) {
    const renderPosts = posts.map(post => {
        return <Photo key={post.id} post={post} currentUsername={currentUsername} handleDelete={handleDelete} />
    })
    
  return (
    <div className="myphotolist">
        <H1>My Photo Gallery</H1>
        {renderPosts}
    </div>
  )
}

export default PhotosList