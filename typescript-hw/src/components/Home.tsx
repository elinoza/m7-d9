import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, InputGroup, FormControl,Col, Button, Row,CarouselItem,Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingleSong from "./components/SingleSong"


interface State {
    songs?:any,
    artist?:any,
    search?:string,
   
  }
  interface Props {
    title?: string
 
  }

class Home extends Component <Props,State>{

    state = {
        search:"eminem",
        songs:[],
        artist:[]
      }
   
componentDidMount=async ()=>{
    const url="https://deezerdevs-deezer.p.rapidapi.com/search?q="
    let response =  await fetch(url+this.state.search,
        {
            headers: {
              "x-rapidapi-key":
                "7058b459femsh8bbc3e5e09ff45bp16ae10jsnaa8151340a4c",
              "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
            },
          })
    let data= await response.json()
    let songs=data.data
    this.setState({songs:songs})


}
   
    render(){


        return(
            <div>
           <form id="search" >
          <input autoComplete="off"   />
          <Button type="submit" className="ml-3 p-3" variant="warning">
            search
          </Button>
        </form>

        <Row>
            {this.state.songs.map((song)=>
            <SingleSong song={song}/>)}
            
        </Row>

            </div>

        )
    }
}
export default Home