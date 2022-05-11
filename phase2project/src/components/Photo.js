import React from 'react'
import styled from 'styled-components'
import { MdLocationOn } from 'react-icons/md'

const Div = styled.div`
    background: pink;
    border: 2px solid black;
    padding: 10px;
    margin-top: 10px;
`
const Img = styled.img`
    padding: 5px;
`
function Photo({post}) {
    const {id, img_url, caption, location} = post
  return (
    <Div>
        <medium><MdLocationOn />{location}</medium>
        <br></br>
        <Img src={img_url} alt="There should be a photo here" height="400px"/>
        <br></br>
        <large>♡ </large>
        <medium>{caption}</medium>
    </Div>
  )
}
export default Photo









