import React from 'react';
import './artwork.css'
import {Col, Row} from 'reactstrap'
const ArtworkResults = ({results}) => {


    const resultsFormatted = results.map((element, index) =>
        <div className="card-content" key={index}>
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
        </div>
        );
    return (
        <ul id="results">
            {resultsFormatted}
        </ul>
    );
}
export default ArtworkResults;