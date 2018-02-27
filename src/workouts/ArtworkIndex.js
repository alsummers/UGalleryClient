import React from 'react';
import ArtworkSearch from './ArtworkSearch';
import { Row, Col } from 'reactstrap';
import ArtworkFaves from './ArtworkFaves';
import ArtworkNotes from './NotesModal'


// this works with the current workout log server, if there server is on a differnt port, they need to change the respective lines for fetch

class WorkoutIndex extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            artworks: []
        }

        this.fetchArtworks = this.fetchArtworks.bind(this);
        this.updateArtworksArray = this.updateArtworksArray.bind(this);
        this.artworkDelete = this.artworkDelete.bind(this);
        this.artworkUpdate =this.artworkUpdate.bind(this)
    }

    componentWillMount(){
        this.fetchArtworks()
    }

    fetchArtworks(){
        fetch("http://localhost:3000/api/UserArtwork", {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': window.localStorage.getItem('token')
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
    artworkUpdate(){
        return <ArtworkNotes />
    }

    artworkDelete(event){
        fetch("http://localhost:3000/api/UserArtwork", {
            method: 'DELETE',
            body: JSON.stringify({artworks: {id:event.target.id}}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
              })
        })
        .then((res) => this.updateArtworksArray())
    }

    render() {
        const artworks = this.state.artworks.length >= 1 ? <ArtworkFaves artworks={this.state.artworks} update={this.artworkUpdate} token={this.props.token} delete={this.artworkDelete}/> : <p>Click to add to your gallery</p> 

        return (
                <Row>
                    <Col></Col>
                <Col lg="3" className="faves">
                {artworks}
                    
                </Col>
                <Col></Col>

                <Col lg="4">
                <ArtworkSearch token = {this.props.token} updateArtworksArray={this.updateArtworksArray} />
                </Col>
                <Col>
                </Col>
            </Row>
        )
    }
}

export default WorkoutIndex