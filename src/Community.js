import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

class Community extends Component {
  render() {
    const {
      name,
      overview,
      entry,
      logo,
      twitter,
      discord,
      establish,
      tag
    } = this.props;

    var logo_defualt = "https://drive.google.com/uc?export=view&id=1TcSrq_O2MXPYrmOHhqSRwa0ZQ1vNjLF7";

    return (
      <Card style={{ width: '18rem' }}>
        <Card.Header as="h5">{name}</Card.Header>
        <Card.Body>
          <Card.Img variant="top" style={{ height: '4rem', width: "auto" }} src={logo ? logo : logo_defualt} />
          <Card.Text>
            {overview}
          </Card.Text>
          <Card.Text>
            {entry}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>{establish}</ListGroupItem>
          <ListGroupItem>{tag}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          {twitter
            ? <Card.Link href={`https://twitter.com/${twitter.slice(1)}`} >Twitter</Card.Link>
            : <Card.Link >No Twitter</Card.Link>
          }
          {discord
            ? <Card.Link href={discord} >Discord</Card.Link>
            : <Card.Link >No Discord</Card.Link>
          }
        </Card.Body>
      </Card>
    );
  }
}

export default Community;