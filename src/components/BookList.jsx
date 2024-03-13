import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { Component } from "react";
import fantasy from "../fantasy.json";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    categoria: this.props.arrayOfBooks,
  };
  render() {
    return (
      <Container>
        <h1 className="text-center">Romance Books</h1>
        <Row>
          {this.state.categoria.map((book) => (
            <SingleBook arrayOfBooks={book} key={book.price} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
