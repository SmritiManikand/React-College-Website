import { Container } from "react-bootstrap";
import './FooterComponent.css'
export default function FooterComponent() {
  return (
    <>
      <footer className="footer bg-dark text-center text-white py-3 mb-0">
        <Container>
          &copy; 2024 Saveetha Engineering College. All rights reserved.
        </Container>
      </footer>
    </>
  );
}