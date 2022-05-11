import React, {useState, useEffect} from 'react'; 
import ExploreItem from './ExploreItem';

function ExplorePage() {
  const [photos, setPhotos] = useState([])
  const key="Hyf0HsPVj552DpIjTOH_TDzIg-bMeeb3-9vNR5Zlvr4"
  const url=`https://api.unsplash.com/photos?page=1&client_id=${key}`
  
  function fetchRequest () { 
    fetch(url)
    .then(response=>response.json())
    .then(data=>setPhotos(data))
  }

  useEffect(() => { 
    fetchRequest()
  }, [])

  return (
    <div className="gallery-container">
      {photos.map(photo => { 
        return <ExploreItem key={photo.id} url={photo.urls.regular}/>
      })}
    </div>
  )
}

export default ExplorePage;