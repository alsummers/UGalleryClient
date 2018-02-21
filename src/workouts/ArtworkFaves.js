import React from 'react';
import { Table, Button } from 'reactstrap';


const ArtworkFaves = (props) => {

    return (
        <div>
            <h3>Favorites</h3>
            <hr />
            <Table hover striped>
                <thead>
                </thead>
                <tbody>
                    {
                        props.artworks.map((artwork, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{artwork.id}</th>
                                    <td>{artwork.title}</td>
                                    <td>{artwork.name}</td>
                                    <td>{artwork.year}</td>
                                    <td><Button id={artwork.id} onClick={props.delete} color="danger">Delete</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default ArtworkFaves;