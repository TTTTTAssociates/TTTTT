import { Nav } from "react-bootstrap";

export const NavigationBar = () => {
    return <Nav activeKey="/">
    <Nav.Item>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/mission">Mission</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="disabled" disabled>
        Best Krafts
      </Nav.Link>
    </Nav.Item>
  </Nav>
}