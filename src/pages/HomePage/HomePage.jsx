import { Col, Container, Row } from "react-bootstrap";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <Container className="welcome-container">
        <Row className="justify-content-center">
          <Col md={8} className="position-relative text-center">
            <img
              src="sec.jpg"
              alt="College Building"
              className="welcome-image"
            />
            <div className="overlay">
              <h1 className="welcome-title">Welcome to Our College</h1>
              <p className="welcome-text">
                Your future starts here. Learn more about our programs and
                events.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}