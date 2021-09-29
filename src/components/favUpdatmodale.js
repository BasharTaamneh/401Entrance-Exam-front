import { withAuth0 } from "@auth0/auth0-react";
import React, { Component } from "react";
import { Button, Form, Modal } from "react-bootstrap";

class Updatemodal extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show}>
          <Modal.Header>
            <Modal.Title>Update Favorites</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={this.props.updatefav}>
              <Form.Label>Fruits Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                required
                defaultValue={this.props.Fvdatadb.name}
              />
              <br />
              <Form.Label>Fruits image link</Form.Label>
              <Form.Control
                name="image"
                type="text"
                required
                defaultValue={this.props.Fvdatadb.image}
              />
              <br />
              <Form.Label>Fruits Price</Form.Label>
              <Form.Control
                name="price"
                type="text"
                required
                defaultValue={this.props.Fvdatadb.price}
              />

              <br />
              <Button
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.showmodalhandle}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default withAuth0(Updatemodal);
