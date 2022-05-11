import React from 'react';
import PhotosList from './PhotosList';

function Feed({posts}) {

  return (
    <div>
        <PhotosList posts={posts}/>
    </div>
  )
}

export default Feed;