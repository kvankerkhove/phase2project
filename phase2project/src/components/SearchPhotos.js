import React, {useState} from 'react'; 
import Unsplash, { toJson } from 'unsplash-js';

function SearchPhotos() {
const [query, setQuery] = useState("");
const [searchedPhotos, setSearchedPhotos] = useState([])

const key= process.env.REACT_APP_API_KEY
const unsplash = new Unsplash({
    accessKey: key,
  });

function handlePhotoSearch (e) { 
    e.preventDefault()
    unsplash.search
    .photos(query, 1, 20)
    .then(toJson)
    .then((json) => {
        setSearchedPhotos(json.results);
    })
    setQuery("")
}

  return (
    <>
      <form className="search-form" onSubmit={handlePhotoSearch}> 
        <label className="search-label" htmlFor="query"> 
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="search-input"
          placeholder={`Try "beach" or "flower"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="card-list">
        {searchedPhotos.map((pic) =>
            <div className="card" key={pic.id}>
                <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="95%"
                height="50%"
                ></img>
            </div>)};
        </div>
    </>
  )
}

export default SearchPhotos;