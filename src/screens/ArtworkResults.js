import React from 'react';
import './artwork.css'
import {Col, Button, Row} from 'reactstrap'


const ArtworkResults = ({results, handleSubmit}) => {
    

    const resultsFormatted = results.map((element, index) =>
        <div className="card-content" key={index} onClick={this.handleSubmit} id="card">
            <Row>
                <Col md="5">
                <img src={results[index].url} className="art-image" alt="art" />
                </Col>
                <Col md="7">
                <h5 className="title">{results[index].title}</h5>
                <p className="artist">{results[index].name}</p>
                <ul className="information">
                <li>{results[index].genre}</li>
                <li>{results[index].year}</li>
                <li>{results[index].medium}</li>
                </ul>
                </Col>
            </Row>
            <Button onClick={event => handleSubmit(event, results[index].id)}>Save</Button>
        </div>
        );
    return (
        <ul id="results">
            {resultsFormatted}
        </ul>
    );
}
export default ArtworkResults;