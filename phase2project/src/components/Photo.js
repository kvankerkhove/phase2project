import React from 'react'
import styled from 'styled-components'
import { MdLocationOn } from 'react-icons/md'

// const Div = styled.div`
//     width: 240px;
//     height: 240px;
//     padding: 10px;
//     background-color: white;
//     box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 0.1);
//     margin: 10px;
// `
// const Img = styled.img`
//     padding: 5px;
// `
function Photo({post}) {
    const {id, img_url, caption, location} = post
  return (
    <div className="myphoto">
        <medium><MdLocationOn />{location}</medium>
        <br></br>
        <img src={img_url} alt="There should be a photo here" height="500px" width="500px"/>
        <br></br>
        <large>♡ </large>
        <medium>{caption}</medium>
    </div>
  )
}
export default Photo









