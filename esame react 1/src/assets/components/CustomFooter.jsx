import { Container, Row, Col } from "react-bootstrap";

const CustomFooter = function () {
  return (
    <Container className="d-flex justify-content-evenly opacity-50">
      <Row>
        <Col>
          <i> </i>
          <p>Audio and Subititles</p>
          <p> Media center </p>
          <p>privacy </p>
          <p>contact us </p>
          <button>service code</button>
          <p>© 1997-2023 Netflix, Inc.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Audio Description</p>
          <p>Investor Relations</p>
          <p>Legal Notices</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Gift Cards</p>
          <p>Terms of Use</p>
          <p>Corporate Information</p>
        </Col>
      </Row>
    </Container>
  );
};
export default CustomFooter;
