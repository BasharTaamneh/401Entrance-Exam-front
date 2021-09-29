import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

class MyFavoritescards extends Component {
  render() {
    return (
      <div className="Favcards">
        {this.props.Fvdata.map((item, idx) => {
          return (
            <Card key={idx} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{`${item.price} JOD`}</Card.Text>
                <Button
                  variant="danger"
                  onClick={() => this.props.deleteFavorite(item._id)}
                >
                  Delete favorites
                </Button>
                <br />
                <Button
                  variant="primary"
                  onClick={() => {
                    this.props.showmodalhandle();
                    this.props.getfavid(item._id);
                  }}
                >
                  update favorites
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default MyFavoritescards;
