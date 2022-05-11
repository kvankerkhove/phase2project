import React, {useState, useEffect} from 'react'; 
import ExploreItem from './ExploreItem';
import { Redirect } from 'react-router-dom';

function ExplorePage({ isLoggedIn, pageNumber }) {
  const [photos, setPhotos] = useState([])

  const key="Hyf0HsPVj552DpIjTOH_TDzIg-bMeeb3-9vNR5Zlvr4"
  const url=`https://api.unsplash.com/photos?page=${pageNumber}&client_id=${key}`


  useEffect(() => {
      fetch(url)
      .then(response=>response.json())
      .then(data=>setPhotos(data))
  }, [pageNumber])
  

  // useEffect(() => { 
  //   fetchRequest()
  // }, [])

  if (!isLoggedIn) return <Redirect exact to="/" />;

  return (
    <div className="gallery-container">
      {photos.map(photo => { 
        return <ExploreItem key={photo.id} url={photo.urls.regular}/>
      })}
    </div>
  )
}

export default ExplorePage;