

import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

var products= {} 
class Product extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <Card>
          <CardImg top src={this.props.person.imagen} alt="Card image cap" />
          <CardBody>
            <CardTitle>{ this.props.person.name }.</CardTitle>
            <CardSubtitle>{ this.props.person.prize } </CardSubtitle>
            <Button >Add Cart</Button>
          </CardBody>
        </Card>
      </div>

    );
  }

};

export default Product;