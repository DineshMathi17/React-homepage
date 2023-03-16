import { Badge, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function App() {
  const data = [
    {

      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Fancy Product",
      price: "$40.00 - $80.00",
      view: 1,
      sale: 0,

    },
    {
      productImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",

      productName: "Special Item",
      rating: "⭐⭐⭐⭐⭐",
      prices: 1,
      prices1: 1,
      view: -1,
      sale: 1,
    },
    {
      productImage: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Sale Item",
      prices: 0,
      prices1: 0,
      view: -1,
      sale: 1,
    },
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Popular Item",
      price: "$40.00",
      rating: "⭐⭐⭐⭐⭐",
      view: -1,
      sale: 0,
    },
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Sale Item",
      prices: 0,
      prices1: 0,
      view: -1,
      sale: 1,
    },
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Fancy Product",
      price: "$120.00 - $280.00",
      view: 1,
      sale: 0,
    },
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Special Item",
      prices: 1,
      prices1: 1,
      rating: "⭐⭐⭐⭐⭐",
      view: -1,
      sale: 1,
    },
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Popular Item",
      price: "$40.00",
      rating: "⭐⭐⭐⭐⭐",
      view: -1,
      sale: 0,
    },
  ];

  const [count, setCount] = useState(0)

  return (

    <div className="App">
      <BasicExample />
      <div className="cart-value">
        <Badge bg="success">
          CART {count}
        </Badge>
      </div>
      <div className="app2">
        <h1 class="display-4 fw-bolder">Shop in style</h1>
        <p >With this shop hompeage template</p>
      </div>

      <div className="card-container">
        {data.map((prod, idx) => <Cards
          idx={idx}
          prod={prod}
          setCount={setCount}
          count={count}
        />)}

      </div>
    </div>
  );
}

export default App;

function Cards({ prod, idx }) {


  return (
    <Card key={idx} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={prod.productImage} />
      {prod.sale > 0 ? <span className="sale bg-dark text-white">sale</span> : ""}

      <Card.Body>
        <Card.Title>{prod.productName}</Card.Title>
        <Card.Text>{prod.price} </Card.Text>

        {prod.prices > 0 ? <span class="text-muted text-decoration-line-through">$20.00 </span> : ""}
        {prod.prices1 > 0 ? <span>$18.00 </span> : ""}

        {prod.prices < 1 ? <span class="text-muted text-decoration-line-through">$50.00 </span> : ""}
        {prod.prices1 < 1 ? <span>$25.00 </span> : ""}

        <Card.Text>{prod.rating}</Card.Text>


        {prod.view > 0 ? <Button
          variant="primary"
        >view Product</Button> : ""}

        {prod.view < 0 ? <Button
          variant="primary"
        >Add to cart</Button> : ""}
        
      </Card.Body>
    </Card>
  )
}
function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Product</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Popular Item
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">New Arrival</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
