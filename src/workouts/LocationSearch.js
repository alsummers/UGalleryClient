import React from 'react';
import {Form, FormGroup, Label, Input } from 'reactstrap';
import LocationResults from './LocationIndex'


class LocationSearch extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
          museums: [],
         
        };
        // console.log(this.state)

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.museums]: event.target.value
        })
    }


    handleKeyUp() {
        document.getElementById('results').className = "museumResults";
            let val = document.getElementById('MuseumInput').value;

            if (val === '') {
                document.getElementById('results').className = 'noDisplay';
            }
            fetch('http://localhost:3000/api/museum', {
                headers: new Headers ({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                })
            })
            .then(response => {
                console.log(response)
                console.log(this.state)
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                    return;
                }

                response.json().then(data => {
                    console.log(data)
                    // let stateResults = this.state.results
                    // stateResults.push(data)
                    const results = data;
                    console.log(results.location)
                    let filterResults = results.filter(result => (result.name.includes(val)|| result.location.includes(val)))
                    this.setState({museums: filterResults});

                   
                    
               
                });
            })

            .catch(err => {
                console.log('Fetch Error :', err);
            })
    }

    render() {
        return (
            <div>
                <h3>Find a Museum</h3>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                    {/* result */}
                    <FormGroup>
                        <Label for="Search">Search</Label>
                        <Input onKeyUp={this.handleKeyUp} onKeyDown={this.handleKeyUp} id="MuseumInput" type="text" name="result" placeholder="enter a location eg; Paris" onChange={this.handleChange}  />
                    </FormGroup>
                    <FormGroup>
                        <LocationResults museums={this.state.museums} />
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default LocationSearch;