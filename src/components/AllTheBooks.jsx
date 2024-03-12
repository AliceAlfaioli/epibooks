import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import items from "../romance.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";

function AllTheBooks() {
  return (
    <Container>
      <h1 className="text-center">Romance Books</h1>
      <Row>
        {items.map((book, index) => (
          <Col xs={6} md={4} lg={3} xl={2} key={index}>
            <Card style={{ height: "2orem" }}>
              <Card.Img variant="top" src={book.img} className="object-fit-cover h-50 w-100" />
              <Card.Body>
                <Card.Title style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {book.title}
                </Card.Title>
                <Card.Text className="d-flex">{book.price}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
