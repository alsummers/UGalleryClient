import React from 'react';
import {Col, Row} from 'reactstrap'

const LocationResults = ({museums}) => {

    console.log({museums})


    const resultsFormatted = museums.map((element, index) =>
        <div className="card-content" key={index}>
            <Row>
                <Col md="5">
                <img src={museums[index].url} className="location-image" alt="museums" />
                </Col>
                <Col md="7">
                <p className="name">{museums[index].name}</p>
                <p className="location">{museums[index].location}</p>
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
export default LocationResults;