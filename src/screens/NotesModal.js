import React from 'react';
import { Button, Modal, ModalHeader, Form, FormGroup, ModalBody, ModalFooter, Input } from 'reactstrap';

class NotesModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      notes: '',
      id: ''
    };

    this.toggle = this.toggle.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this)
    console.log(props)
  }
  componentWillReceiveProps(props){
      console.log("WORD")
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleChange(event){
      console.log(this.state)
      this.setState({
          [event.target.name]: event.target.value
      })
  }
  handleSubmit(event){
      
      fetch(`https://as-gallery-server.herokuapp.com/api/UserArtwork/${event.target.id}`, {
        method: 'PUT',
        body: JSON.stringify({UserArtwork: {notes: this.state.notes}}),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
          })
    })
    .then((res) => this.toggle())
        .then((logData) => {
            return this.setState({artworks: logData})
        })
}
      


  render() {
      console.log(this.props)
    return (
      <div>
        <Button color="secondary" onClick={this.toggle} className="notesButton">Notes</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Artwork Notes</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit} id={this.props.artworkid}>
            <FormGroup>
                <Input name="notes" onChange={this.handleChange}/>
            </FormGroup>
            <Button color="secondary" >Submit</Button>
            </Form>
          </ModalBody>
          <ModalFooter>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default NotesModal;