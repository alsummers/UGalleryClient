import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import NotesModal from './NotesModal';
import './artwork.css'
// import styled from 'styled-components'

// const Image = styled.img`
//     max-height: 30%;
//     max-width: auto;

// `


const ArtworkFaves = (props) => {
   
    var ArtworksRemapped = props.artworks.map((artwork, id) => {
        return (

            <div key={id} className="fav-content">
            <Row className="justify-content-center">
                <Col xs="9" className="container">
                <img src={artwork.url} alt="fav" className="art-image"/>
                </Col>
            </Row>
                <hr/>
                <Row className="justify-content-center"><NotesModal artworkid={artwork.id} /><Button className="delete" id={artwork.id} onClick={props.delete} color="secondary">X</Button></Row>
                <Row className="justify-content-center">
                <Col className="notestext">
                {artwork.notes}
                </Col>
                </Row>
            </div>

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