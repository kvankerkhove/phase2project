import React from 'react';
import PhotosList from './PhotosList';
import { Redirect } from "react-router-dom";
import styled from 'styled-components';


const H1 = styled.h1`
    color: white;
    font-family: 'Poppins', sans-serif;
`


function Feed({posts, isLoggedIn, currentUsername, handleDelete}) {

  if (!isLoggedIn) return <Redirect exact to="/" />;

  return (
    <div>
        {posts.length === 0 ? <H1>Create your first post!</H1> : <PhotosList posts={posts} currentUsername={currentUsername} handleDelete={handleDelete}/> }
    </div>
  )
}

export default Feed;