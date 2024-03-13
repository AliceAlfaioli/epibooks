import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MyFooter(props) {
  return (
    <Card className="text-center" bg="dark" data-bs-theme="dark">
      <Card.Header>Footer</Card.Header>
      <Card.Body>
        <Card.Title>Special books title</Card.Title>
        <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default MyFooter;
