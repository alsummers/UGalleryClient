import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import NotesModal from './NotesModal';
import './artwork.css'


const ArtworkFaves = (props) => {
    // var openModal = (id) => {
    //     console.log("OPPPENNNN", id)
    //     if(id){
    //          return (
    //         <div><NotesModal artwork={id} isOpen={true}/>
    //         {console.log("HEY this is returned")}
    //         </div>
    //     ) 
    //     } else {
    //         return null
    //     }
      
    // }
    var ArtworksRemapped = props.artworks.map((artwork, id) => {
        return (
                <Col xs="9" key={id}>
            <div className="fav-content">
            <Row className="justify-content-center">
                <img src={artwork.url} alt="fav" className="art-image"/>
            </Row>
                <hr/>
                <Row className="justify-content-center"><NotesModal artworkid={artwork.id} /><Button className="delete" id={artwork.id} onClick={props.delete} color="secondary">X</Button></Row>
                <Row className="justify-content-center">
                {artwork.notes}
                </Row>
            </div>
                </Col>
        )
    })
    return (
        <Col id="artfaves">
        <Row className="justify-content-center">
        {ArtworksRemapped}
        </Row>
        </Col>
    );
}

export default ArtworkFaves;