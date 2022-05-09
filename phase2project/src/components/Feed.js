import React, {useState, useEffect} from 'react'
import PhotosList from './PhotosList'


function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    
  return (
    <div>
        <PhotosList posts={posts}/>
    </div>
  )
}

export default Feed