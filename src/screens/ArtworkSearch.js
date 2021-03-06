import React from 'react';
import {Form, FormGroup, Label, Input } from 'reactstrap';
import ArtworkResults from './ArtworkResults'


class ArtworkSearch extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
          results: [],
         
        };
        // console.log(this.state)

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.results]: event.target.value
        })
    }
    handleSubmit(event, id) {
        event.preventDefault();

        fetch("https://as-gallery-server.herokuapp.com/api/UserArtwork", {
            method: 'POST',
            body: JSON.stringify({ id: id }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            })
        })
            .then((res) => res.json())
            .then((logData) => {
                this.props.updateArtworksArray()

            })
    }

    handleKeyUp() {
        document.getElementById('results').className = "artworkResults";
            let val = document.getElementById('searchInput').value;

            if (val === "") {
                document.getElementById('results').className = 'noDisplay';
            }
            fetch('https://as-gallery-server.herokuapp.com/api/artwork', {
                headers: new Headers ({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                })
            })
            .then(response => {

                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                    return;
                }

                response.json().then(data => {
                    // let stateResults = this.state.results
                    // stateResults.push(data)
                    const results = data;
                    let filterResults = results.filter(result => (result.name.includes(val)|| result.title.includes(val)))
                    this.setState({results: filterResults});

                   
                    
               
                });
            })

            .catch(err => {
                console.log('Fetch Error :', err);
            })
    }


    render() {
        return (
            <div>
                <h3>Browse the Gallery</h3>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                    {/* result */}
                    <FormGroup>
                        <Label for="Search">Search</Label>
                        <Input onKeyUp={this.handleKeyUp} onKeyDown={this.handleKeyUp} id="searchInput" type="text" name="result" placeholder="ex: Rembrandt" onChange={this.handleChange}  />
                    </FormGroup>
                    <FormGroup>
                        <ArtworkResults results={this.state.results} handleSubmit={this.handleSubmit} />
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default ArtworkSearch;