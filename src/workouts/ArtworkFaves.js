import React from 'react';
import { Button, Row, Col } from 'reactstrap';


const ArtworkFaves = (props) => {
    var ArtworksRemapped = props.artworks.map((artwork, id) => {
        return (
            <div key={id} className="fav-content" onClick={props.delete}>
            <Row>
                <Col>
                <img src={artwork.url} alt="fav" className="art-image"/>
                <Button id={artwork.id} onClick={props.delete} color="light">X</Button>
                </Col>
            </Row>
            </div>
        )
    })
    return (
        <ul id="artfaves">
        {ArtworksRemapped}
        </ul>
    );
}

export default ArtworkFaves;