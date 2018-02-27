import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import NotesModal from './NotesModal';


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
                <img src={artwork.url} alt="fav" className="art-image"/>
                <hr/>
                <Row><NotesModal artworkid={artwork.id} /><Button id={artwork.id} onClick={props.delete} color="secondary">X</Button></Row>
                {/* <Button onClick={() => openModal(artwork.id)}>U</Button> */}
                {artwork.notes}
            </div>
                </Col>
        )
    })
    return (
        <Col id="artfaves">
        {ArtworksRemapped}
        </Col>
    );
}

export default ArtworkFaves;