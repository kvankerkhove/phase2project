import React from 'react';
import SearchPhotos from './SearchPhotos';
import { Redirect } from 'react-router-dom';

function ExplorePage({ isLoggedIn }) {

  if (!isLoggedIn) return <Redirect exact to="/" />;

  return (
    <div className="search-container">
      <SearchPhotos />
    </div>
  )
}

export default ExplorePage;