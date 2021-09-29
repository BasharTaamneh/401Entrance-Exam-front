import React from "react";
import { Button, Card } from "react-bootstrap";

class Datacards extends React.Component {
  render() {
    return (
      <div className="datacards">
        {this.props.Apidata.map((item, idx) => {
          return (
            <Card key={idx} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{`${item.price} JOD`}</Card.Text>
                <Button
                  variant="primary"
                    onClick={() => this.props.addTofavorite(item)}
                >
                  Add to favorites
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default (Datacards);
