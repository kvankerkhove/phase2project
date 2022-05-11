import React from 'react';
import PhotosList from './PhotosList';
import { Redirect } from "react-router-dom";

function Feed({posts, isLoggedIn}) {


  if (!isLoggedIn) return <Redirect exact to="/" />;

  return (
    <div>
        <PhotosList posts={posts}/>
    </div>
  )
}

export default Feed;