import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';

export default function DeptPage() {
  return (
    <Container style={{padding: "50px"}}>
      <Row>
        <Col md={12}>
          <h1>Departments</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Department</th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AIDS</td>
                <td>120</td>
              </tr>
              <tr>
                <td>ECE</td>
                <td>150</td>
              </tr>
              <tr>
                <td>AI & IOT</td>
                <td>110</td>
              </tr>
              <tr>
                <td>Medical Electronic</td>
                <td>110</td>
              </tr>
              <tr>
                <td>BME</td>
                <td>110</td>
              </tr>
              <tr>
                <td>EEE</td>
                <td>100</td>
              </tr>
              <tr>
                <td>MECH</td>
                <td>130</td>
              </tr>
              <tr>
                <td>EIE</td>
                <td>90</td>
              </tr>
              <tr>
                <td>AIML</td>
                <td>110</td>
              </tr>
              <tr>
                <td>AICS</td>
                <td>80</td>
              </tr>
              <tr>
                <td>CSE</td>
                <td>200</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}