import React, { useState } from 'react'
import { RouteComponentProps,withRouter } from 'react-router-dom'
import { SingleSongProps} from "../types/interfaces";
import { Modal, InputGroup, FormControl,Col, Button, Row,CarouselItem,Image } from "react-bootstrap";


type MixProps = RouteComponentProps & SingleSongProps;
const SingleSong = (props: MixProps) => {
 

  return (
    <Col className="item-wrapper"  onClick={()=> props.history.push(`/details/${props.song.album.id}`)}>
    
      <Image className="album-cover" src={props.song.album.cover} />
      <h4 className="d-flex justify-content-center mt-2 album-title">
        {props.song.album.title}
      </h4>
   
  </Col>
  )
}

export default withRouter(SingleSong)