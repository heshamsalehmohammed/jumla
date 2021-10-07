import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';


<Navbar
collapseOnSelect
bg="light"
variant="light"
sticky="top"
className="navbar-toggleable-xl products-navbar">
<Navbar.Collapse
  id="responsive-navbar-nav"
  className={'justify-content-md-center'}>
  <Nav className="mr-auto">
    <NavDropdown
      className="pr-2 py-2 align-text-top"
      title="Events"
      id="basic-nav-dropdown"
      align="end"
      >
      <Container className="eventsNav pt-0 mt-0">
        <Row>
          <Col xs="12" className="text-left">
            <Dropdown.Header>Catering</Dropdown.Header>
            <Dropdown.Item>
              <Link href="/">Corporate</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/">Private</Link>
            </Dropdown.Item>

            <Dropdown.Header>Classes</Dropdown.Header>
            <Dropdown.Item>
              <Link href="/">Barista 101</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/">History of Coffee</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/">Intro to Cafe Snobbery</Link>
            </Dropdown.Item>

            <Dropdown.Header>Rentals</Dropdown.Header>
            <Dropdown.Item>
              <Link href="/">Fireside Room</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/">Roasting Room</Link>
            </Dropdown.Item>

            <Dropdown.Header>Seasonal</Dropdown.Header>
            <Dropdown.Item>
              <Link href="/">Coldbrew Night</Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/">Campfire Coffee Class</Link>
            </Dropdown.Item>
          </Col>
        </Row>
      </Container>
    </NavDropdown>
  </Nav>
</Navbar.Collapse>
</Navbar>










<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>