import React from 'react';
import ArtworkSearch from './ArtworkSearch';
import { Container, Row, } from 'reactstrap';
import ArtworkFaves from './ArtworkFaves';

// this works with the current workout log server, if there server is on a differnt port, they need to change the respective lines for fetch

class WorkoutIndex extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            artworks: []
        }

        this.fetchArtworks = this.fetchArtworks.bind(this);
        this.updateArtworksArray = this.updateArtworksArray.bind(this);
        this.workoutDelete = this.workoutDelete.bind(this);
    }

    componentWillMount(){
        this.fetchArtworks()
    }

    fetchArtworks(){
        fetch("http://localhost:3000/api/", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
              })
        })
        .then((res) => res.json())
        .then((logData) => {
            return this.setState({artworks: logData})
        })
    }

    updateArtworksArray(){
        this.fetchArtworks()
    }

    workoutDelete(event){
        fetch("http://localhost:3000/api/", {
            method: 'DELETE',
            body: JSON.stringify({log: {id:event.target.id}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
              })
        })
        .then((res) => this.updateArtworksArray())
    }

    render() {
        const artworks = this.state.artworks.length >= 1 ? <ArtworkFaves artworks={this.state.artworks} token={this.props.token} delete={this.workoutDelete}/> : <h4>Click to add to favorites</h4> 

        return (
            <Container>
            <Row>
                    <ArtworkSearch token = {this.props.token} updateArtworksArray={this.updateArtworksArray}/>
                </Row>
                <hr />
                <Row>
                    {artworks}
            </Row>
        </Container>
        )
    }
}

export default WorkoutIndex