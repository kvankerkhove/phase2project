import React from 'react';
import PhotosList from './PhotosList';
import { Redirect } from "react-router-dom";

function Feed({posts, isLoggedIn, currentUsername, handleDelete}) {

  if (!isLoggedIn) return <Redirect exact to="/" />;

  return (
    <div>
        {posts.length === 0 ? <h1 style={{color: 'white'}} >Create your first post!</h1> : <PhotosList posts={posts} currentUsername={currentUsername} handleDelete={handleDelete}/> }
    </div>
  )
}

export default Feed;